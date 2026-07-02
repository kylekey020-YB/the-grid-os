import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GRID_ROOT = path.resolve(__dirname, "..");
const OUTPUT_PATH = path.join(GRID_ROOT, "public", "mission-snapshot.json");
const runtimeProcess = typeof process === "undefined" ? { env: {}, argv: [] } : process;
const APEX_DIR = runtimeProcess.env.THE_GRID_APEX_DIR || "C:/Users/NovaI/APEX1v3/V4";
const CLU_DIR = runtimeProcess.env.THE_GRID_CLU_DIR || "C:/Users/NovaI/OneDrive/CLU";
const WATCH_MODE = runtimeProcess.argv.includes("--watch");
const REFRESH_MS = 5000;

const safetyFlags = [
  "Read-only local snapshot generation only.",
  "No backend control surface is exposed.",
  "No wallet signing, live trading, supplier outreach, or inventory action is authorized.",
  "No .env or secret files are read.",
  "Missing data is reported as unknown instead of fabricated."
];

function safeRead(filePath) {
  const base = path.basename(filePath).toLowerCase();
  if (base === ".env" || base.startsWith(".env.")) return null;
  try { return fs.readFileSync(filePath, "utf8"); } catch { return null; }
}

function safeJsonLines(filePath) {
  const raw = safeRead(filePath);
  if (!raw) return { rows: [], errors: ["missing"] };
  const rows = [];
  const errors = [];
  raw.split(/\r?\n/).forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    try { rows.push(JSON.parse(trimmed)); } catch (error) { errors.push("line " + (index + 1) + ": " + error.message); }
  });
  return { rows, errors };
}

function firstValue(row, keys) {
  for (const key of keys) {
    if (row && row[key] !== undefined && row[key] !== null && row[key] !== "") return row[key];
  }
  return null;
}
function numberValue(value) { if (value === null || value === undefined || value === "") return null; const next = Number(value); return Number.isFinite(next) ? next : null; }
function round(value, digits = 2) { if (value === null || value === undefined || !Number.isFinite(Number(value))) return null; return Number(Number(value).toFixed(digits)); }
function sum(values) { const numeric = values.map(numberValue).filter((value) => value !== null); if (!numeric.length) return null; return round(numeric.reduce((total, value) => total + value, 0)); }
function avg(values) { const numeric = values.map(numberValue).filter((value) => value !== null); if (!numeric.length) return null; return round(numeric.reduce((total, value) => total + value, 0) / numeric.length); }

function winState(row) {
  const explicit = String(firstValue(row, ["result", "outcome", "status", "trade_result", "shot_result"]) || "").toLowerCase();
  if (["win", "winner", "profit", "profitable", "tp"].some((token) => explicit.includes(token))) return "win";
  if (["loss", "loser", "stop", "sl", "failed"].some((token) => explicit.includes(token))) return "loss";
  const pnl = numberValue(firstValue(row, ["pnl_usd", "pnl", "profit_usd", "net_pnl_usd"]));
  if (pnl !== null) return pnl > 0 ? "win" : pnl < 0 ? "loss" : "flat";
  const pct = numberValue(firstValue(row, ["pnl_pct", "return_pct", "gain_pct"]));
  if (pct !== null) return pct > 0 ? "win" : pct < 0 ? "loss" : "flat";
  return "unknown";
}

function timestampValue(row) {
  const value = firstValue(row, ["closed_at", "exit_time", "timestamp", "time", "created_at", "updated_at"]);
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toISOString();
}

function breakdown(rows, keys) {
  const counts = {};
  for (const row of rows) {
    const value = firstValue(row, keys);
    if (value === null) continue;
    const key = String(value);
    counts[key] = (counts[key] || 0) + 1;
  }
  return Object.keys(counts).length ? counts : null;
}

function latestRows(rows, count = 5) {
  return [...rows]
    .sort((a, b) => (Date.parse(timestampValue(b) || "") || 0) - (Date.parse(timestampValue(a) || "") || 0))
    .slice(0, count)
    .map((row) => ({ token: firstValue(row, ["token", "symbol", "mint", "asset", "pair"]) || "unknown", result: winState(row), pnl_usd: round(numberValue(firstValue(row, ["pnl_usd", "pnl", "profit_usd", "net_pnl_usd"]))), pnl_pct: round(numberValue(firstValue(row, ["pnl_pct", "return_pct", "gain_pct"]))), exit_reason: firstValue(row, ["exit_reason", "reason", "sell_reason"]), timestamp: timestampValue(row) }));
}

function closedRows(rows) {
  return rows.filter((row) => {
    const state = String(firstValue(row, ["status", "state", "phase"]) || "").toLowerCase();
    return state.includes("closed") || state.includes("exit") || firstValue(row, ["exit_time", "closed_at", "pnl_usd", "pnl", "pnl_pct"]) !== null;
  });
}

function computeTradeStats(rows) {
  const closed = closedRows(rows);
  const wins = closed.filter((row) => winState(row) === "win");
  const losses = closed.filter((row) => winState(row) === "loss");
  const pnlValues = closed.map((row) => firstValue(row, ["pnl_usd", "pnl", "profit_usd", "net_pnl_usd"]));
  const winPcts = wins.map((row) => firstValue(row, ["pnl_pct", "return_pct", "gain_pct"]));
  const lossPcts = losses.map((row) => firstValue(row, ["pnl_pct", "return_pct", "gain_pct"]));
  const timestamps = closed.map(timestampValue).filter(Boolean).sort();
  const knownOutcomes = wins.length + losses.length;
  return { closed_trades: closed.length || null, wins: knownOutcomes ? wins.length : null, losses: knownOutcomes ? losses.length : null, win_rate: knownOutcomes ? round((wins.length / knownOutcomes) * 100) : null, total_pnl_usd: sum(pnlValues), avg_win_pct: avg(winPcts), avg_loss_pct: avg(lossPcts), best_winner_pct: winPcts.map(numberValue).filter((value) => value !== null).sort((a, b) => b - a)[0] ?? null, worst_loss_pct: lossPcts.map(numberValue).filter((value) => value !== null).sort((a, b) => a - b)[0] ?? null, last_trade_time: timestamps[timestamps.length - 1] || null, latest_5_closed: latestRows(closed) };
}

function findFirstExisting(baseDir, names) { for (const name of names) { const filePath = path.join(baseDir, name); if (fs.existsSync(filePath)) return filePath; } return null; }
function parseClu() { const logPath = findFirstExisting(CLU_DIR, ["clu_trade_log.jsonl", "CLU_TRADE_LOG.jsonl"]); const missionStatus = safeRead(path.join(CLU_DIR, "MISSION_STATUS.md")); const { rows, errors } = logPath ? safeJsonLines(logPath) : { rows: [], errors: ["missing"] }; const stats = computeTradeStats(rows); return { label: "CLU", source_dir: CLU_DIR, connected: Boolean(logPath), status: logPath ? "Paper only - no wallet/signing authorized." : "CLU log not connected yet.", log_path: logPath, parse_errors: errors.filter((error) => error !== "missing"), mission_status_connected: Boolean(missionStatus), closed_shots: stats.closed_trades, wins: stats.wins, losses: stats.losses, win_rate: stats.win_rate, total_pnl_usd: stats.total_pnl_usd, avg_win_pct: stats.avg_win_pct, avg_loss_pct: stats.avg_loss_pct, best_winner_pct: stats.best_winner_pct, worst_loss_pct: stats.worst_loss_pct, current_goal_progress: missionStatus?.match(/(\d+\s*\/\s*\d+)/)?.[1] || null, mode_breakdown: breakdown(rows, ["mode", "trade_mode", "strategy_mode"]), exit_reason_breakdown: breakdown(rows, ["exit_reason", "reason", "sell_reason"]), last_trade_time: stats.last_trade_time, latest_5_closed_shots: stats.latest_5_closed }; }
function parseApex() { const logPath = findFirstExisting(APEX_DIR, ["trade_log.jsonl", "apex_trade_log.jsonl", "APEX_TRADE_LOG.jsonl", "trades.jsonl"]); const { rows, errors } = logPath ? safeJsonLines(logPath) : { rows: [], errors: ["missing"] }; const stats = computeTradeStats(rows); return { label: "APEX", source_dir: APEX_DIR, connected: Boolean(logPath), status: logPath ? "Paper/Beta log connected for read-only analysis." : "APEX log not connected yet.", log_path: logPath, parse_errors: errors.filter((error) => error !== "missing"), closed_trades: stats.closed_trades, wins: stats.wins, losses: stats.losses, win_rate: stats.win_rate, total_pnl_usd: stats.total_pnl_usd, entry_source_breakdown: breakdown(rows, ["entry_source", "source", "signal_source"]), exit_reason_breakdown: breakdown(rows, ["exit_reason", "reason", "sell_reason"]), boost_source_breakdown: breakdown(rows, ["confidence_boost_source", "boost_source", "sentiment_source"]), latest_5_trades: stats.latest_5_closed, last_trade_time: stats.last_trade_time, handoff_truths: ["Prior sample showed negative expectancy.", "Post-fix sample is required before rule changes become doctrine.", "early_momentum and bonding_curve signals remain unproven.", "PAPER=True is required."] }; }
function readRootDoc(name) { const raw = safeRead(path.join(GRID_ROOT, name)); return { connected: Boolean(raw), length: raw ? raw.length : 0 }; }
function safeJsonFile(filePath) {
  const raw = safeRead(filePath);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}
function missionBusEntry(name, filePath) {
  const status = safeJsonFile(filePath);
  return {
    mission: status?.mission || name,
    connected: Boolean(status),
    source: filePath,
    status: status?.status || "No status.json published yet.",
    phase: status?.phase || null,
    last_update: status?.last_update || null,
    next_action: status?.next_action || null,
    tickets: status?.tickets ?? null
  };
}
function parseMissionBus() {
  return [
    missionBusEntry("APEX", path.join(APEX_DIR, "status.json")),
    missionBusEntry("CLU", path.join(CLU_DIR, "status.json")),
    missionBusEntry("Commerce", path.join(GRID_ROOT, "commerce", "status.json")),
    missionBusEntry("Backtester", path.join(GRID_ROOT, "backtester", "status.json"))
  ];
}
function parseCommerce() { const doc = readRootDoc("COMMERCE_MISSION_STATUS.md"); return { label: "Commerce", connected: doc.connected, status: doc.connected ? "Gate A public-data validation status available." : "Commerce mission status missing.", active_record: "Commerce Validation Record #003 - Gate A Phase A1", safety: "No supplier contact, inventory purchase, or wholesale pricing assumptions are authorized in Phase A1.", document_length: doc.length }; }
function parseBacktester() { const doc = readRootDoc("APEX_BACKTESTER_STATE.md"); return { label: "Backtester", connected: doc.connected, status: doc.connected ? "Backtester state document available." : "Backtester state not copied into GRID root yet.", document_length: doc.length }; }
function parseGrid() { const projectLog = readRootDoc("PROJECT_LOG.md"); const versionDoc = safeRead(path.join(GRID_ROOT, "VERSION.md")); return { label: "THE GRID", connected: projectLog.connected || Boolean(versionDoc), version: versionDoc?.match(/v\d+\.\d+\.\d+/)?.[0] || "v0.3.0-planning", project_log_connected: projectLog.connected, version_doc_connected: Boolean(versionDoc), status: "Read-only local mission data bridge foundation." }; }
function buildTickets(snapshot) { const tickets = []; if (!snapshot.apex.connected) tickets.push({ id: "TICKET-APEX-001", title: "Connect APEX paper trade log", owner: "APEX WARDEN", severity: "High", status: "Open", evidence: "No supported APEX JSONL trade log was found in the configured APEX directory.", recommendation: "Point THE_GRID_APEX_DIR to the folder containing the paper trade log or copy a supported JSONL log into the default location." }); if (!snapshot.clu.connected) tickets.push({ id: "TICKET-CLU-001", title: "Connect CLU paper shot log", owner: "CLU STRIKER", severity: "High", status: "Open", evidence: "clu_trade_log.jsonl was not found in the configured CLU directory.", recommendation: "Point THE_GRID_CLU_DIR to the CLU folder with clu_trade_log.jsonl." }); if (!snapshot.backtester.connected) tickets.push({ id: "TICKET-BACKTESTER-001", title: "Add backtester state handoff", owner: "GAUNTLET", severity: "Medium", status: "Open", evidence: "APEX_BACKTESTER_STATE.md is not present in THE GRID root.", recommendation: "Copy the current backtester state summary into the GRID root when available." }); if (!snapshot.commerce.connected) tickets.push({ id: "TICKET-COMMERCE-001", title: "Restore Commerce mission status", owner: "MERCHANT FORGE", severity: "Medium", status: "Open", evidence: "COMMERCE_MISSION_STATUS.md is missing from the GRID root.", recommendation: "Add the Commerce status handoff before expanding Commerce UI decisions." }); return tickets; }
function buildResearchProposals(snapshot) { return [{ id: "RD-APEX-ENTRY-TIMING", title: "APEX Entry Timing v1", owner: "APEX WARDEN", status: "Proposed", evidence_basis: snapshot.apex.connected ? "APEX paper log is available for read-only segmentation." : "Waiting for APEX paper log connection.", recommendation: "Compare winners and losers by token age, discovery-to-entry lag, 5m pump, mcap bucket, re-entry status, and confidence boost source before changing live rules." }, { id: "RD-COMMERCE-GATE-A2", title: "Commerce Gate A Phase A2 Quote Plan", owner: "MERCHANT FORGE", status: "Proposed", evidence_basis: snapshot.commerce.connected ? "Phase A1 public-data status is available." : "Commerce handoff status is missing.", recommendation: "Prepare exact supplier quote questions only after the public-data model remains plausible." }, { id: "RD-KNOWLEDGE-VAULT", title: "Knowledge Vault Data Shape", owner: "ARCHIVIST", status: "Proposed", evidence_basis: "Project documentation exists, but persistence is intentionally not built.", recommendation: "Define mission logs, decision history, and prompt library schemas before persistence work begins." }]; }
function buildWatchers(snapshot) { return [{ name: "ZENITH", role: "Systems Architect", signal: "Coordinates architecture and cross-project doctrine.", status: "Active" }, { name: "SENTINEL", role: "Safety Monitor", signal: snapshot.safety_flags.join(" "), status: "Active" }, { name: "APEX WARDEN", role: "Trading Research Monitor", signal: snapshot.apex.status, status: snapshot.apex.connected ? "Connected" : "Waiting for log" }, { name: "CLU STRIKER", role: "Paper Shot Monitor", signal: snapshot.clu.status, status: snapshot.clu.connected ? "Connected" : "Waiting for log" }, { name: "GAUNTLET", role: "Backtest Monitor", signal: snapshot.backtester.status, status: snapshot.backtester.connected ? "Connected" : "Waiting for handoff" }, { name: "MERCHANT FORGE", role: "Commerce Validation Monitor", signal: snapshot.commerce.status, status: snapshot.commerce.connected ? "Connected" : "Waiting for handoff" }, { name: "QUARTERMASTER", role: "Resource Constraint Monitor", signal: "Tracks missing local artifacts and quote dependencies only.", status: "Active" }, { name: "ARCHIVIST", role: "Knowledge Monitor", signal: "Documentation and handoff artifacts remain the source of truth until persistence exists.", status: "Active" }, { name: "GRID CORE", role: "UI Foundation", signal: snapshot.grid.status, status: "Active" }]; }
function buildCouncil(snapshot) { return [{ role: "ZENITH", briefing: "v0.3 should remain a read-only visibility layer. The bridge can reveal gaps without becoming a control system." }, { role: "SENTINEL", briefing: "Safety locks remain active: no autonomous execution, no wallet signing, no live trading, no supplier spend." }, { role: "ARCHIVIST", briefing: snapshot.grid.project_log_connected ? "Project log is available for context." : "Project log is missing and should be restored before handoff work expands." }, { role: "MERCHANT FORGE", briefing: snapshot.commerce.connected ? "Commerce status can be reviewed from the root handoff doc." : "Commerce status is missing, so Commerce conclusions should not be expanded." }, { role: "APEX WARDEN", briefing: snapshot.apex.connected ? "APEX log exists for paper-only analysis." : "APEX log is not connected; entry-timing claims must wait for evidence." }, { role: "CLU STRIKER", briefing: snapshot.clu.connected ? "CLU log exists for paper-only review." : "CLU log is not connected; no performance claims should be made." }]; }
function buildSnapshot() { const snapshot = { generated_at: new Date().toISOString(), bridge_version: "v0.3.0", apex: parseApex(), clu: parseClu(), commerce: parseCommerce(), backtester: parseBacktester(), grid: parseGrid(), mission_bus: parseMissionBus(), safety_flags: safetyFlags, open_tickets: [], research_and_development_proposals: [], watcher_summaries: [], council_briefing: [] }; snapshot.open_tickets = buildTickets(snapshot); snapshot.research_and_development_proposals = buildResearchProposals(snapshot); snapshot.watcher_summaries = buildWatchers(snapshot); snapshot.council_briefing = buildCouncil(snapshot); return snapshot; }
function writeSnapshot() { const snapshot = buildSnapshot(); fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true }); fs.writeFileSync(OUTPUT_PATH, JSON.stringify(snapshot, null, 2) + "\n", "utf8"); console.log("Mission snapshot written: " + OUTPUT_PATH); return snapshot; }
writeSnapshot();
if (WATCH_MODE) { console.log("Mission snapshot watch mode active. Refresh interval: " + REFRESH_MS + "ms"); setInterval(writeSnapshot, REFRESH_MS); }

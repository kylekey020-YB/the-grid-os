import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const vaultRoot = path.join(repoRoot, "obsidian-vault");

const folders = [
  "00 - Command/Daily Executive Briefs",
  "01 - Doctrine",
  "02 - Mission Records",
  "03 - Decision Records",
  "04 - Approval Records",
  "05 - Revenue Corps/Scout Reports",
  "05 - Revenue Corps/Opportunity Matrices",
  "05 - Revenue Corps/Launch Center",
  "05 - Revenue Corps/Fiverr",
  "05 - Revenue Corps/Gumroad",
  "05 - Revenue Corps/Etsy",
  "06 - Commerce/Gate Records",
  "06 - Commerce/Supplier Research",
  "07 - Trading/APEX",
  "07 - Trading/CLU",
  "08 - Academy/Playbooks",
  "08 - Academy/Lessons Learned",
  "08 - Academy/Hall of Wins",
  "08 - Academy/Hall of Failures",
  "08 - Academy/Evolution Lab",
  "09 - Strategic Assets/DealFlow",
  "10 - Officers",
];

const indexFiles = [
  ["Index.md", "# THE GRID Obsidian Vault\n\nBacklinks: [[Operation First Revenue]] [[THE_GRID_CONSTITUTION]] [[Revenue Architect]] [[Mission Records]] [[DealFlow]]\n"],
  ["00 - Command/Index.md", "# Command\n\n- [[Mission Commander]]\n- [[Operation First Revenue]]\n- [[Daily Executive Briefs]]\n"],
  ["01 - Doctrine/Index.md", "# Doctrine\n\n- [[THE_GRID_CONSTITUTION]]\n- [[Founding Council Brief]]\n- [[Operating Doctrine]]\n"],
  ["02 - Mission Records/Index.md", "# Mission Records\n\nMission Records answer: what happened?\n\nBacklinks: [[Operation First Revenue]] [[Mission Pipeline]]\n"],
  ["03 - Decision Records/Index.md", "# Decision Records\n\nDecision Records answer: why did we choose this?\n\nBacklinks: [[Mission Commander]] [[THE_GRID_CONSTITUTION]]\n"],
  ["04 - Approval Records/Index.md", "# Approval Records\n\nEverything irreversible flows through approval.\n\nBacklinks: [[Mission Commander]] [[Approval Queue]]\n"],
  ["05 - Revenue Corps/Index.md", "# Revenue Corps\n\nBacklinks: [[Revenue Architect]] [[Scout Reports]] [[Operation First Revenue]]\n"],
  ["08 - Academy/Index.md", "# The Academy\n\nEvery lesson learned becomes permanent institutional knowledge.\n\nBacklinks: [[Playbooks]] [[Lessons Learned]] [[Evolution Lab]]\n"],
  ["09 - Strategic Assets/Index.md", "# Strategic Assets\n\nBacklinks: [[DealFlow]]\n"],
  ["10 - Officers/Index.md", "# Officers\n\n- [[ZENITH]]\n- [[Hermes]]\n- [[Revenue Architect]]\n- [[Sentinel]]\n- [[Archivist]]\n- [[Quartermaster]]\n"],
];

const generatedFiles = [
  ["00 - Command/Mission Commander.md", "# Mission Commander\n\nCommander: Maximus Titus Antony\n\nBacklinks: [[Operation First Revenue]] [[THE_GRID_CONSTITUTION]] [[Founding Council Brief]]\n"],
  ["00 - Command/Operation First Revenue.md", "# Operation First Revenue\n\nObjective: reach the first $10k/month milestone through evidence-backed manual workflows.\n\nBacklinks: [[Revenue Architect]] [[Scout Reports]] [[Launch Center]] [[Mission Records]]\n"],
  ["01 - Doctrine/Operating Doctrine.md", "# Operating Doctrine\n\nReality before automation.\nArchitecture before complexity.\nEvidence before expansion.\nEvery module earns its place.\n\nBacklinks: [[THE_GRID_CONSTITUTION]] [[Founding Council Brief]]\n"],
  ["05 - Revenue Corps/Scout Reports/Scout Reports.md", "# Scout Reports\n\nScouts discover demand. Product Corps creates original assets. Launch Corps publishes only after Mission Commander approval.\n\nBacklinks: [[Revenue Architect]] [[Operation First Revenue]]\n"],
  ["09 - Strategic Assets/DealFlow/DealFlow.md", "# DealFlow\n\nStrategic asset notes placeholder. No private deal data or secrets belong here.\n\nBacklinks: [[Strategic Assets]] [[Mission Commander]]\n"],
  ["10 - Officers/ZENITH.md", "# ZENITH\n\nRole: Systems Architect.\n\nBacklinks: [[THE_GRID_CONSTITUTION]] [[Founding Council Brief]]\n"],
  ["10 - Officers/Hermes.md", "# Hermes\n\nRole: institutional memory and operations record filing.\n\nBacklinks: [[Mission Records]] [[Daily Executive Briefs]]\n"],
  ["10 - Officers/Revenue Architect.md", "# Revenue Architect\n\nRole: Revenue Corps commander and opportunity ranking owner.\n\nBacklinks: [[Revenue Corps]] [[Scout Reports]] [[Operation First Revenue]]\n"],
  ["10 - Officers/Sentinel.md", "# Sentinel\n\nRole: risk and safety officer.\n\nBacklinks: [[Approval Records]] [[THE_GRID_CONSTITUTION]]\n"],
  ["10 - Officers/Archivist.md", "# Archivist\n\nRole: knowledge officer and Academy steward.\n\nBacklinks: [[The Academy]] [[Mission Records]]\n"],
  ["10 - Officers/Quartermaster.md", "# Quartermaster\n\nRole: supply chain officer for Commerce constraints.\n\nBacklinks: [[Commerce]] [[Supplier Research]]\n"],
];

const exports = [
  ["THE_GRID_CONSTITUTION.md", "01 - Doctrine/THE_GRID_CONSTITUTION.md"],
  ["FOUNDING_COUNCIL_BRIEF.md", "01 - Doctrine/Founding Council Brief.md"],
  ["PROJECT_LOG.md", "02 - Mission Records/PROJECT_LOG.md"],
  ["DECISION_RECORDS.md", "03 - Decision Records/DECISION_RECORDS.md"],
  ["APPROVAL_SYSTEM.md", "04 - Approval Records/APPROVAL_SYSTEM.md"],
  ["SCOUT_REPORTS_STATUS.md", "05 - Revenue Corps/Scout Reports/SCOUT_REPORTS_STATUS.md"],
  ["REVENUE_CORPS_STATUS.md", "05 - Revenue Corps/REVENUE_CORPS_STATUS.md"],
  ["LAUNCH_CENTER_STATUS.md", "05 - Revenue Corps/Launch Center/LAUNCH_CENTER_STATUS.md"],
  ["COMMERCE_MISSION_STATUS.md", "06 - Commerce/Gate Records/COMMERCE_MISSION_STATUS.md"],
  ["REVIEW_v0.1.1.md", "08 - Academy/Lessons Learned/REVIEW_v0.1.1.md"],
];

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readIfExists(filePath) {
  return (await exists(filePath)) ? fs.readFile(filePath, "utf8") : null;
}

async function writeWithBackup(relativePath, content) {
  const destination = path.join(vaultRoot, relativePath);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  const existing = await readIfExists(destination);
  if (existing === content) return "unchanged";
  if (existing !== null) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    await fs.copyFile(destination, destination + ".backup-" + stamp);
  }
  await fs.writeFile(destination, content, "utf8");
  return existing === null ? "created" : "updated-with-backup";
}

async function copyWithBacklinks(sourceRelative, destinationRelative) {
  const source = path.join(repoRoot, sourceRelative);
  if (!(await exists(source))) return "missing-source";
  const sourceBody = await fs.readFile(source, "utf8");
  const header = "<!-- Exported from THE GRID. Backlinks: [[Operation First Revenue]] [[Mission Records]] [[Revenue Architect]] [[THE_GRID_CONSTITUTION]] -->\n\n";
  return writeWithBackup(destinationRelative, header + sourceBody);
}

async function main() {
  await fs.mkdir(vaultRoot, { recursive: true });
  for (const folder of folders) {
    await fs.mkdir(path.join(vaultRoot, folder), { recursive: true });
  }

  const results = [];
  for (const [relativePath, content] of [...indexFiles, ...generatedFiles]) {
    results.push([relativePath, await writeWithBackup(relativePath, content)]);
  }

  for (const [source, destination] of exports) {
    results.push([destination, await copyWithBacklinks(source, destination)]);
  }

  console.log("Obsidian vault export complete.");
  for (const [file, result] of results) console.log(result + ": " + file);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

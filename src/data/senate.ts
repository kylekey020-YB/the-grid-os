export type SenateConfidence = "Low" | "Medium" | "High";
export type SenateRecommendation = {
  id: string;
  emoji: string;
  advisor: string;
  domain: string;
  recommendation: string;
  evidence: string;
  confidence: SenateConfidence;
};

export const senateDoctrine = "Evidence informs. Officers advise. Mission Commander decides.";

export const senateRecommendations: SenateRecommendation[] = [
  { id: "senate-zenith", emoji: "🧠", advisor: "ZENITH", domain: "Architecture", recommendation: "Keep Revenue Intelligence read-only until manual workflows produce evidence.", evidence: "Doctrine requires evidence before expansion.", confidence: "High" },
  { id: "senate-revenue", emoji: "💸", advisor: "Revenue Architect", domain: "Income Systems", recommendation: "Prioritize opportunity scoring only after demand and margin evidence exists.", evidence: "Current revenue values are Unknown.", confidence: "Medium" },
  { id: "senate-gauntlet", emoji: "🧪", advisor: "Gauntlet", domain: "Validation", recommendation: "Treat each offer as an experiment with a hypothesis, evidence, and decision gate.", evidence: "Experiment tracker is present but unvalidated.", confidence: "High" },
  { id: "senate-sentinel", emoji: "🛡️", advisor: "Sentinel", domain: "Safety", recommendation: "Block autonomous publishing, scraping violations, fake reviews, and account automation.", evidence: "Mission hard rules and compliance doctrine.", confidence: "High" },
  { id: "senate-quartermaster", emoji: "📦", advisor: "Quartermaster", domain: "Operations", recommendation: "Do not spend money until a manual experiment justifies cost.", evidence: "No purchasing is authorized.", confidence: "High" },
  { id: "senate-archivist", emoji: "📚", advisor: "Archivist", domain: "Knowledge", recommendation: "Document every experiment result before systematizing workflows.", evidence: "Playbook library is draft-only.", confidence: "High" },
];

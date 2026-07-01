import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "@/components/SectionHeader";
import { knowledgeCategories } from "@/data/grid";
export function KnowledgeVault() { return <div className="space-y-6"><SectionHeader eyebrow="Knowledge Vault" title="Searchable Operating Knowledge" description="A beautiful storage surface for validated knowledge, decisions, prompts, and lessons learned." /><Card><CardHeader><CardTitle>Vault Search</CardTitle><CardDescription>Interface placeholder; search wiring arrives with validated content sources.</CardDescription></CardHeader><CardContent><div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Search the vault" /></div></CardContent></Card><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{knowledgeCategories.map((category) => <Card key={category}><CardHeader><CardTitle>{category}</CardTitle><CardDescription>Awaiting curated entries.</CardDescription></CardHeader></Card>)}</div></div>; }

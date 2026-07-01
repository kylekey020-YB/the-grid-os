import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { cn } from "@/lib/utils";

const programs = ["Trading Research", "Commerce Research", "Knowledge Vault", "War Room"];
const lifecycle = ["Manual", "Semi-Automated", "Autonomous"];

export function Programs() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Programs"
        title="Programs Are Not Autonomous Yet"
        description="Every program begins as a manual workstation. A program only advances when repeatable evidence justifies it."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => (
          <Card key={program}>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <CardTitle>{program}</CardTitle>
                <StatusBadge label="Manual" tone="manual" />
              </div>
              <CardDescription>Current status: human-operated workflow placeholder.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {lifecycle.map((step, index) => (
                  <div
                    key={step}
                    className={cn(
                      "rounded-md border p-3 text-center text-xs",
                      index === 0
                        ? "border-amber-300/30 bg-amber-300/10 text-amber-100"
                        : "border-border bg-background/50 text-muted-foreground",
                    )}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

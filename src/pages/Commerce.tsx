import { ArrowDown, ClipboardCheck, FileSearch, ShieldAlert } from "lucide-react";
import type { ElementType } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Timeline } from "@/components/Timeline";
import { commerceEvidence, commerceWorkflow, validationGates } from "@/data/grid";
import { cn } from "@/lib/utils";

export function Commerce() {
  return (
    <div className="space-y-7">
      <SectionHeader
        eyebrow="Commerce"
        title="Shopify Opportunity Validator"
        description="The first commerce workstation organizes human validation for one opportunity at a time. It records what must be reviewed before a workflow earns more structure."
      />

      <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <Card className="overflow-hidden">
          <CardHeader className="flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>Manual Workstation</CardTitle>
              <CardDescription>No sourcing, posting, purchasing, or autonomous decisions are active.</CardDescription>
            </div>
            <StatusBadge label="Manual Workflow" tone="manual" />
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <WorkstationPrinciple
              icon={FileSearch}
              title="Gather evidence"
              text="Collect demand, constraints, and operator notes before scoring anything."
            />
            <WorkstationPrinciple
              icon={ShieldAlert}
              title="Name risks"
              text="Surface uncertainty early so the workflow stays grounded."
            />
            <WorkstationPrinciple
              icon={ClipboardCheck}
              title="Record decision"
              text="Every advancement needs a human-readable reason."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lifecycle</CardTitle>
            <CardDescription>Current state of the commerce program.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Manual", active: true },
              { label: "Semi-Automated", active: false },
              { label: "Autonomous", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center justify-between rounded-md border p-3 text-sm",
                  item.active
                    ? "border-amber-300/30 bg-amber-300/10 text-amber-100"
                    : "border-border bg-background/50 text-muted-foreground",
                )}
              >
                <span>{item.label}</span>
                <span className="text-xs uppercase tracking-[0.14em]">{item.active ? "Current" : "Locked"}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle>Validation Gates</CardTitle>
            <CardDescription>Nothing advances until these human checks are complete.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {validationGates.map((gate, index) => (
              <div key={gate} className="flex items-center gap-3 rounded-md border border-border/70 bg-background/50 p-3 text-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs text-primary">
                  {index + 1}
                </span>
                <span>{gate}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Evidence Board</CardTitle>
            <CardDescription>Structured placeholders for real research inputs.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {commerceEvidence.map((item) => (
              <div key={item.label} className="rounded-md border border-border/70 bg-background/50 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-sm font-semibold">{item.label}</h3>
                  <StatusBadge label={item.state} tone="muted" />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Commerce Workflow Map</CardTitle>
          <CardDescription>Each step remains a workstation until validation proves it deserves more capability.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span>Manual flow</span>
            <ArrowDown className="h-3.5 w-3.5 text-primary" />
            <span>Evidence first</span>
          </div>
          <Timeline items={commerceWorkflow} />
        </CardContent>
      </Card>
    </div>
  );
}

function WorkstationPrinciple({
  icon: Icon,
  title,
  text,
}: {
  icon: ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-md border border-border/70 bg-background/50 p-4">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <h3 className="font-display text-sm font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

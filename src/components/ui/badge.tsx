import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", { variants: { variant: { default: "border-primary/30 bg-primary/10 text-primary", manual: "border-amber-300/30 bg-amber-300/10 text-amber-200", success: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200", danger: "border-red-300/30 bg-red-300/10 text-red-200", muted: "border-border bg-muted/60 text-muted-foreground", beta: "border-accent/30 bg-accent/10 text-accent" } }, defaultVariants: { variant: "default" } });
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}
export function Badge({ className, variant, ...props }: BadgeProps) { return <div className={cn(badgeVariants({ variant }), className)} {...props} />; }

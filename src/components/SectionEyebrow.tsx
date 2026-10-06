import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border border-border bg-surface text-sm uppercase tracking-wider text-muted">
      <span className="w-2 h-2 rounded-full bg-accent" />
      {children}
    </div>
  );
}

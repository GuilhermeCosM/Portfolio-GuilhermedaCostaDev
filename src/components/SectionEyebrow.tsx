import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-xs tracking-[0.25em] uppercase mb-3 flex items-center gap-2 text-cyan">
      <span className="text-copper">//</span>
      {children}
    </div>
  );
}

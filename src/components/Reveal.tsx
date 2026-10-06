import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades and slides content up into place once it scrolls into view. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

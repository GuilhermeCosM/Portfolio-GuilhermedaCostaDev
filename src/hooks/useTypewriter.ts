import { useEffect, useRef, useState } from "react";
import type { BootLine } from "../types";

interface RenderedLine extends BootLine {
  showOutput: boolean;
}

export function useTypewriter(lines: BootLine[], active: boolean) {
  const [rendered, setRendered] = useState<RenderedLine[]>([]);
  const runId = useRef(0);

  useEffect(() => {
    if (!active) return;

    // Each effect run gets its own id. Any scheduled callback from a
    // previous run (e.g. from React StrictMode's mount->cleanup->mount,
    // or the IntersectionObserver firing again) checks this id before
    // touching state, so stale runs can never interleave or duplicate lines.
    const myRun = ++runId.current;
    setRendered([]);

    let lineIdx = 0;
    let charIdx = 0;
    let waitingForNext = false;

    function step() {
      if (runId.current !== myRun || lineIdx >= lines.length) return;
      const target = lines[lineIdx];

      if (charIdx < target.prompt.length) {
        charIdx++;
        const partial = target.prompt.slice(0, charIdx);
        setRendered((prev) => {
          if (runId.current !== myRun) return prev;
          const next = prev.slice(0, lineIdx);
          next[lineIdx] = { ...target, prompt: partial, showOutput: false };
          return next;
        });
        setTimeout(step, 28);
        return;
      }

      if (!waitingForNext) {
        waitingForNext = true;
        setRendered((prev) => {
          if (runId.current !== myRun) return prev;
          const next = prev.slice(0, lineIdx);
          next[lineIdx] = { ...target, showOutput: true };
          return next;
        });
        setTimeout(step, 220);
        return;
      }

      lineIdx++;
      charIdx = 0;
      waitingForNext = false;
      setTimeout(step, 260);
    }

    const kickoff = setTimeout(step, 400);
    return () => {
      runId.current++;
      clearTimeout(kickoff);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, lines]);

  return rendered;
}

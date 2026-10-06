import { useEffect, useState } from "react";

const sequence = [
  { command: "npm run dev", output: ["VITE v5.3.1  ready in 420 ms", "Local:   http://localhost:5173/"] },
  { command: "git status --short", output: ["working tree clean"] },
  { command: "npm run build", output: ["✓ TypeScript checks passed", "✓ Build complete in 1.4s"] },
];

export function TerminalBackdrop() {
  const [history, setHistory] = useState<{ command: string; output: string[] }[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let index = 0;
    let cancelled = false;

    const typeCommand = (position: number) => {
      if (cancelled) return;
      const entry = sequence[index];
      if (position <= entry.command.length) {
        setCurrent(entry.command.slice(0, position));
        timer = setTimeout(() => typeCommand(position + 1), 48);
        return;
      }

      timer = setTimeout(() => {
        if (cancelled) return;
        setHistory((previous) => [...previous, entry].slice(-3));
        setCurrent("");
        index = (index + 1) % sequence.length;
        timer = setTimeout(() => typeCommand(0), 500);
      }, 1250);
    };

    typeCommand(0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div aria-hidden="true" className="terminal-backdrop">
      <div className="terminal-topbar">
        <span className="terminal-controls"><i /><i /><i /></span>
        <span>Prompt — sessão local</span>
        <span className="terminal-path">C:\Users\Guilherme</span>
      </div>
      <div className="terminal-body">
        {history.map((entry, index) => (
          <div key={`${entry.command}-${index}`} className="terminal-entry">
            <p><span className="terminal-prompt">C:\Users\Guilherme&gt;</span> <span className="terminal-command">{entry.command}</span></p>
            {entry.output.map((line) => <p key={line} className="terminal-output">{line}</p>)}
          </div>
        ))}
        <p className="terminal-current"><span className="terminal-prompt">C:\Users\Guilherme&gt;</span> <span className="terminal-command">{current}</span><span className="terminal-caret" /></p>
      </div>
    </div>
  );
}

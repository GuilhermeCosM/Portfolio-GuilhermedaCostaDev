import { Cpu } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow>skills</SectionEyebrow>
        <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-10">Stacks que eu uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((g) => (
            <div key={g.label} className="rounded-lg p-5 bg-surface border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={15} className="text-copper" />
                <span className="font-mono text-sm font-medium">{g.label}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2 text-muted">
                    <span className="w-1 h-1 rounded-full shrink-0 bg-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

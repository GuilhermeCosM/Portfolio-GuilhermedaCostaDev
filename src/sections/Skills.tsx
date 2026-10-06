import { Cpu } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Reveal } from "../components/Reveal";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28 border-t border-border bg-surface-alt">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="flex justify-center">
            <SectionEyebrow>Skills</SectionEyebrow>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">
            Tecnologias que eu uso
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start gap-6">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 100} className="w-full rounded-2xl p-7 bg-surface border border-border">
              <div className="flex items-center gap-2.5 mb-5">
                <Cpu size={18} className="text-accent" />
                <span className="text-lg font-medium text-ink">{g.label}</span>
              </div>
              <ul className="flex flex-col gap-3">
                {g.items.map((item) => (
                  <li key={item} className="text-base flex items-start gap-2.5 text-muted">
                    <span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

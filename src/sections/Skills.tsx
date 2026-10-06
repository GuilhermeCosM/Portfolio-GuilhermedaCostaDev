import { Cpu } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Reveal } from "../components/Reveal";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-28 border-t border-border bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="flex justify-center">
            <SectionEyebrow>Skills</SectionEyebrow>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            Stack que eu uso
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start gap-5">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 100} className="w-full rounded-2xl p-6 bg-surface border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={16} className="text-accent" />
                <span className="text-base font-medium text-ink">{g.label}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2 text-muted">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full shrink-0 bg-accent" />
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

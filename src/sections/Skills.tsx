import { Cpu } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Reveal } from "../components/Reveal";
import { skillGroups } from "../data/skills";

// First group renders as a larger, featured tile; the rest fill the row below.
export function Skills() {
  const [featured, ...rest] = skillGroups;

  return (
    <section id="skills" className="px-6 py-28 border-t border-border bg-surface-alt">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="flex justify-center">
            <SectionEyebrow>Skills</SectionEyebrow>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            Stack que eu uso
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured && (
            <Reveal className="md:col-span-2 md:row-span-1 rounded-2xl p-8 bg-surface border border-border">
              <div className="flex items-center gap-2 mb-6">
                <Cpu size={18} className="text-accent" />
                <span className="text-base font-medium text-ink">{featured.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-full bg-surface-alt text-ink border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {rest.map((g, i) => (
            <Reveal key={g.label} delay={i * 100} className="rounded-2xl p-6 bg-surface border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={15} className="text-accent" />
                <span className="text-sm font-medium text-ink">{g.label}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2 text-muted">
                    <span className="w-1 h-1 rounded-full shrink-0 bg-accent" />
                    {item}
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

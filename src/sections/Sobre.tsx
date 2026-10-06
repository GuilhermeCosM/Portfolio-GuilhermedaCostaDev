import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";

const facts = [
  { icon: MapPin, label: "Localização", value: "Jacarepaguá, Rio de Janeiro" },
  { icon: GraduationCap, label: "Formação", value: "Engenharia da Computação · UVA" },
  { icon: Briefcase, label: "Atuação", value: "Estagiário de TI · PROCON-RJ" },
];

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
      <SectionEyebrow>Sobre mim</SectionEyebrow>
      <div className="mt-7 grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-[2rem] bg-accent/10" />
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Guilherme da Costa de Melo"
            className="relative aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-lg shadow-ink/10"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">Desenvolvedor full stack</h1>
          <p className="mt-3 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            Em busca de estágio em desenvolvimento de software
          </p>
          <p className="mt-6 text-base leading-8 text-muted md:text-lg">
            Sou estudante de Engenharia da Computação na UVA e estagiário de TI no PROCON-RJ, onde desenvolvo sistemas internos de gestão de chamados e equipamentos.
          </p>
          <p className="mt-4 text-base leading-8 text-muted md:text-lg">
            Trabalho principalmente com Spring Boot, React e TypeScript, Node.js e PostgreSQL. Gosto de entender o sistema inteiro — da necessidade e dos dados até a interface que as pessoas usam todos os dias.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
                <Icon size={18} className="mb-4 text-accent" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-ink">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

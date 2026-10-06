import { Briefcase, GraduationCap } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";

const milestones = [
  {
    date: "2025 — em andamento",
    title: "Estagiário de TI · PROCON-RJ",
    detail: "Suporte técnico e infraestrutura, além do desenvolvimento de sistemas internos para gestão de equipamentos e chamados.",
    icon: Briefcase,
  },
  {
    date: "02/2022 — em andamento",
    title: "Engenharia da Computação · UVA",
    detail: "Universidade Veiga de Almeida. Formação que combina computação, eletrônica e desenvolvimento de software.",
    icon: GraduationCap,
  },
];

export function Formacao() {
  return (
    <section id="trajetoria" className="mx-auto max-w-5xl px-6 py-14 lg:px-10 lg:py-20">
      <SectionEyebrow>Trajetória</SectionEyebrow>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink md:text-6xl">Aprendizado em movimento.</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        Experiências que conectam suporte, desenvolvimento e a vontade de continuar aprendendo.
      </p>

      <div className="relative mt-12 space-y-6 before:absolute before:bottom-8 before:left-[1.15rem] before:top-8 before:w-px before:bg-border">
        {milestones.map(({ date, title, detail, icon: Icon }) => (
          <article key={title} className="relative rounded-3xl border border-border bg-surface p-6 pl-16 shadow-sm md:p-8 md:pl-20">
            <span className="absolute left-3 top-7 grid h-10 w-10 place-items-center rounded-full border-4 border-bg bg-accent text-white">
              <Icon size={16} />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{date}</p>
            <h2 className="mt-3 text-xl font-semibold text-ink md:text-2xl">{title}</h2>
            <p className="mt-3 max-w-3xl leading-7 text-muted">{detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

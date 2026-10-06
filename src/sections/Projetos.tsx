import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";

export function Projetos() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-14 pt-32 lg:px-10 lg:pb-20 lg:pt-36">
      <SectionEyebrow>Projetos selecionados</SectionEyebrow>
      <div className="mb-10 mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">O que eu construí</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">Sistemas criados para necessidades concretas, com atenção aos detalhes e a quem usa.</p>
        </div>
        <span className="text-sm font-medium text-muted">3 projetos</span>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10">
              {project.image && (
                <div className="aspect-video overflow-hidden bg-surface-alt">
                  <img
                    src={project.image}
                    alt={`Captura de tela do projeto ${project.title}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{project.tag}</p>
                <h2 className="mt-3 text-xl font-semibold text-ink">{project.title}</h2>
                <p className="mt-3 min-h-24 text-sm leading-7 text-muted">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-surface-alt px-3 py-1.5 text-xs font-medium text-ink">
                      {item}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-accent hover:underline">
                    Abrir projeto <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

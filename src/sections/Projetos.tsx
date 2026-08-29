import { ExternalLink } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { ViaDot } from "../components/ViaDot";
import { projects } from "../data/projects";

export function Projetos() {
  return (
    <section
      id="projetos"
      className="px-6 py-24 border-t border-border bg-surface-alt"
    >
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow>projetos</SectionEyebrow>

        <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-10">
          O que eu construí
        </h2>

        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-10">
            {projects.map((p) => (
              <div key={p.title} className="relative pl-8">
                <div className="absolute left-0 top-1.5">
                  <ViaDot filled />
                </div>

                <div className="rounded-lg overflow-hidden bg-surface border border-border transition-transform hover:-translate-y-0.5">
                  
                  {/* IMAGEM */}
                  {p.image && (
                    p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block overflow-hidden cursor-pointer"
                        aria-label={`Ver ${p.title}`}
                      >
                        <img
                          src={p.image}
                          alt={`Captura de tela do projeto ${p.title}`}
                          className="w-full h-auto block border-b border-border transition-transform duration-500 ease-out hover:scale-105"
                        />
                      </a>
                    ) : (
                      <img
                        src={p.image}
                        alt={`Captura de tela do projeto ${p.title}`}
                        className="w-full h-auto block border-b border-border transition-transform duration-500 ease-out hover:scale-105"
                      />
                    )
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      
                      <div className="font-mono text-[11px] uppercase tracking-wider text-cyan">
                        {p.tag}
                      </div>

                      {/* ÍCONE DO LINK */}
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted hover:text-copper transition-colors shrink-0"
                          aria-label={`Ver ${p.title} no GitHub`}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>

                    <h3 className="font-mono text-lg font-semibold mb-2">
                      {p.title}
                    </h3>

                    {/* DESCRIÇÃO CLICÁVEL */}
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block text-sm leading-relaxed mb-4 text-muted hover:text-foreground transition-colors cursor-pointer"
                      >
                        {p.desc}
                      </a>
                    ) : (
                      <p className="text-sm leading-relaxed mb-4 text-muted">
                        {p.desc}
                      </p>
                    )}

                    {/* TECNOLOGIAS */}
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt text-muted border border-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

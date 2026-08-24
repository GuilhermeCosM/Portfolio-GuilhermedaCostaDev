import { useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { useTypewriter } from "../hooks/useTypewriter";
import { bootLines } from "../data/bootLines";
import { ChevronRight, Download, Terminal } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(true);
  const typed = useTypewriter(bootLines, active);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative pt-40 pb-28 px-6 overflow-hidden bg-dot-grid bg-[length:26px_26px] bg-[-10px_-10px]"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_260px] gap-12 items-start">
        <div>
          <SectionEyebrow>desenvolvedor full stack</SectionEyebrow>
          <h1 className="font-mono text-5xl md:text-6xl font-semibold leading-[1.05] mb-6 tracking-tight">
            Guilherme da Costa de Melo
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl text-muted">
            Construo sistemas que sustentam produtos reais — do backend em Spring Boot e Angular
            às interfaces em React, aplicados no dia a dia como estagiário de TI no PROCON-RJ.
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <button
              onClick={() => scrollTo("projetos")}
              className="font-mono px-5 py-2.5 text-sm font-medium rounded-md flex items-center gap-2 bg-copper text-bg transition-transform hover:-translate-y-0.5"
            >
              Ver projetos <ChevronRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("contato")}
              className="font-mono px-5 py-2.5 text-sm font-medium rounded-md border border-border hover:border-cyan transition-colors"
            >
              Contato
            </button>
            <a
              href="/curriculo.pdf"
              download="Curriculo DEV Guilherme da Costa de Melo.pdf"
              className="font-mono px-5 py-2.5 text-sm font-medium rounded-md border border-border hover:border-cyan transition-colors flex items-center gap-2"
            >
              Baixar Currículo <Download size={15} />
            </a>
          </div>

          {/* Terminal panel */}
          <div className="rounded-lg overflow-hidden bg-surface border border-border">
            <div className="flex items-center gap-2 px-4 py-2.5 text-xs text-muted border-b border-border font-mono">
              <Terminal size={13} />
              boot.sh
            </div>
            <div className="p-5 text-sm leading-relaxed min-h-[168px] font-mono">
              {typed.map((line, i) => (
                <div key={i} className="mb-2.5">
                  <div>
                    <span className="text-cyan">{line.prompt}</span>
                    {i === typed.length - 1 && !line.showOutput && (
                      <span className="inline-block w-2 h-4 ml-0.5 align-middle bg-cyan animate-pulse" />
                    )}
                  </div>
                  {line.showOutput && <div className="pl-4 text-muted">{line.output}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative mx-auto md:mx-0 w-full max-w-[260px]">
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-copper" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-cyan" />
          <div className="rounded-lg overflow-hidden border border-border bg-surface">
            <img
              src="/profile.jpg"
              alt="Guilherme da Costa de Melo"
              className="w-full aspect-[3/4] object-cover grayscale-[15%] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

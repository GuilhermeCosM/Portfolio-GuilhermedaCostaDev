import { ArrowRight } from "lucide-react";
import type { ScreenId } from "../components/Nav";
import { TerminalBackdrop } from "../components/TerminalBackdrop";

interface HeroProps {
  onNavigate: (screen: ScreenId) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="hero-section relative isolate mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1600px] items-center overflow-hidden px-5 pb-16 pt-14 sm:px-8 lg:px-14">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <TerminalBackdrop />

      <div className="hero-copy relative z-10 ml-auto w-full max-w-[940px] pb-12 pt-24 text-right sm:pt-16">
        <p className="hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.24em] text-white/55 sm:text-sm">
          Desenvolvedor full stack <span className="mx-2 text-accent">·</span> Jacarepaguá, Rio de Janeiro
        </p>

        <h1 className="hero-title font-sans font-medium uppercase text-white">
          <span className="block">Criando</span>
          <span className="block">Sistemas</span>
          <span className="block text-white/80">Digitais</span>
        </h1>

        <div className="hero-stats ml-auto mb-7 mt-8 grid w-full max-w-[560px] grid-cols-[1fr_auto_1fr] items-center gap-5 sm:gap-8">
          <div className="text-center">
            <p className="font-sans text-[1.65rem] font-medium tracking-tight text-white sm:text-3xl">PROCON-RJ<span className="text-accent">.</span></p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55 sm:text-sm">Estágio de TI</p>
          </div>
          <span className="h-11 w-px bg-white/15" />
          <div className="text-center">
            <p className="font-sans text-[1.65rem] font-medium tracking-tight text-white sm:text-3xl">UVA<span className="text-accent">.</span></p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55 sm:text-sm">Engenharia da Computação</p>
          </div>
        </div>

        <div className="hero-actions flex flex-wrap items-center justify-end gap-3">
          <button onClick={() => onNavigate("projetos")} className="group inline-flex h-14 items-center gap-5 rounded-full bg-white pl-6 pr-2 text-base font-medium text-[#0A0B10] transition hover:-translate-y-0.5 hover:bg-[#E4FAFD]">
            Ver meus projetos
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0A0B10] text-white transition group-hover:bg-[#247D8B]"><ArrowRight size={17} /></span>
          </button>
          <button onClick={() => onNavigate("sobre")} className="rounded-full border border-white/15 px-6 py-4 text-base text-white/80 transition hover:border-white/40 hover:text-white">
            Sobre mim
          </button>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm">Engenharia da Computação <span className="mx-2 text-accent">/</span> UVA</p>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-6 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45 sm:flex lg:left-14">
        <span className="h-px w-8 bg-white/25" />
        Construindo soluções úteis
      </div>
      <div className="pointer-events-none absolute bottom-5 right-6 z-10 text-xs tracking-[0.18em] text-white/45 lg:right-14">01 <span className="mx-1 text-white/30">/</span> 06</div>
    </section>
  );
}

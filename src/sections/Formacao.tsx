import { GitBranch } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { ViaDot } from "../components/ViaDot";

export function Formacao() {
  return (
    <section id="formacao" className="px-6 py-24 border-t border-border bg-surface-alt">
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow>formação</SectionEyebrow>
        <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-10">Trajetória</h2>
        <div className="relative pl-8">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

          <div className="relative mb-10">
            <div className="absolute -left-8 top-1.5">
              <ViaDot filled />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <GitBranch size={14} className="text-cyan" />
              <span className="font-mono text-xs uppercase tracking-wider text-copper">2025 · em andamento</span>
            </div>
            <h3 className="font-mono text-lg font-semibold mb-1">Estagiário de TI — PROCON-RJ</h3>
            <p className="text-sm text-muted">
              Suporte técnico e infraestrutura, cadastro de equipamentos em domínio e desenvolvimento
              de sistemas internos para gestão de computadores e chamados.
            </p>
          </div>

          <div className="relative mb-2">
            <div className="absolute -left-8 top-1.5">
              <ViaDot filled />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <GitBranch size={14} className="text-cyan" />
              <span className="font-mono text-xs uppercase tracking-wider text-copper">02/2022 · em andamento</span>
            </div>
            <h3 className="font-mono text-lg font-semibold mb-1">Engenharia da Computação</h3>
            <p className="text-sm text-muted">Universidade Veiga de Almeida (UVA)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

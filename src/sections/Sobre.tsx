import { SectionEyebrow } from "../components/SectionEyebrow";

const facts: [string, string][] = [
  ["Localização", "Rio de Janeiro"],
  ["Formação", "Engenharia da Computação · UVA"],
  ["Atual", "Estagiário de TI · PROCON-RJ"],
];

export function Sobre() {
  return (
    <section id="sobre" className="px-6 py-24 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <SectionEyebrow>sobre</SectionEyebrow>
        <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-6">Quem sou eu</h2>
        <p className="text-base leading-relaxed mb-6 text-muted">
          Sou estudante de Engenharia da Computação na UVA e estagiário de TI no PROCON-RJ, onde
          desenvolvo sistemas internos de gestão de chamados e equipamentos. Trabalho principalmente com
          Spring Boot, React/TypeScript, Angular e PostgreSQL, construindo desde sistemas corporativos
          até aplicações pessoais completas — do banco de dados à interface.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-lg overflow-hidden bg-border">
          {facts.map(([label, value]) => (
            <div key={label} className="p-5 bg-surface">
              <div className="font-mono text-xs uppercase tracking-wider mb-2 text-copper">{label}</div>
              <div className="text-sm">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

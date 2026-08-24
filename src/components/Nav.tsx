import { Download } from "lucide-react";

const links: [string, string][] = [
  ["Sobre", "sobre"],
  ["Projetos", "projetos"],
  ["Skills", "skills"],
  ["Formação", "formacao"],
  ["Contato", "contato"],
];

export function Nav() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-bg/85 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm">
          Full-stack Developer
        </span>
        <div className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase font-mono">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-muted/90 hover:text-cyan transition-colors bg-transparent border-none cursor-pointer"
            >
              {label}
            </button>
          ))}
          <a
            href="/curriculo.pdf"
            download="Curriculo DEV Guilherme da Costa de Melo.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:border-cyan transition-colors normal-case tracking-normal"
          >
            <Download size={13} /> CV
          </a>
        </div>
      </div>
    </nav>
  );
}

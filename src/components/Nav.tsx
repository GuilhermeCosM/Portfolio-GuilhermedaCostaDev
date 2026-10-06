import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export type ScreenId = "inicio" | "sobre" | "projetos" | "habilidades" | "trajetoria" | "contato";

const links: [string, ScreenId][] = [
  ["Início", "inicio"],
  ["Sobre", "sobre"],
  ["Projetos", "projetos"],
  ["Habilidades", "habilidades"],
  ["Trajetória", "trajetoria"],
  ["Contato", "contato"],
];

interface NavProps {
  active: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export function Nav({ active, onNavigate }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (screen: ScreenId) => {
    onNavigate(screen);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8" aria-label="Navegação principal">
      <div className="relative mx-auto flex max-w-[1480px] items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={() => navigate("projetos")} className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 transition hover:border-white/30 hover:text-white sm:text-sm">
            Projetos <span className="ml-1 text-accent">+</span>
          </button>
          <button onClick={() => navigate("habilidades")} className="hidden rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 transition hover:border-white/30 hover:text-white sm:inline-flex sm:text-sm">
            Tecnologia <ArrowUpRight size={13} className="ml-2 text-white/60" />
          </button>
        </div>

        <button onClick={() => navigate("inicio")} className="absolute left-1/2 -translate-x-1/2 text-center" aria-label="Ir para o início">
          <span className="flex items-center gap-2.5">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />
            <span className="text-left">
              <span className="block font-sans text-lg font-medium tracking-[0.18em] text-white sm:text-xl">GUILHERME</span>
              <span className="hidden text-[9px] tracking-[0.24em] text-white/40 sm:block">COSTA DE MELO</span>
            </span>
          </span>
        </button>

        <div className="relative">
          <button onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} className="flex items-center gap-3 py-2 pl-3 text-sm text-white/85 transition hover:text-white">
            <span className="hidden sm:inline">Menu</span>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-12 w-52 rounded-2xl border border-white/10 bg-[#11131A]/95 p-2 shadow-glow backdrop-blur-xl">
              {links.map(([label, id]) => (
                <button key={id} onClick={() => navigate(id)} aria-current={active === id ? "page" : undefined} className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${active === id ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}>
                  {label}<span className="text-[10px] text-accent">{active === id ? "●" : "↗"}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

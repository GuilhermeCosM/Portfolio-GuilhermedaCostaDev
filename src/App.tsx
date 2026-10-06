import { useState, type ReactNode } from "react";
import { Nav, type ScreenId } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Projetos } from "./sections/Projetos";
import { Skills } from "./sections/Skills";
import { Formacao } from "./sections/Formacao";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

const pages: Record<Exclude<ScreenId, "inicio">, ReactNode> = {
  sobre: <Sobre />,
  projetos: <Projetos />,
  habilidades: <Skills />,
  trajetoria: <Formacao />,
  contato: <Contato />,
};

export default function App() {
  const [screen, setScreen] = useState<ScreenId>("inicio");

  return (
    <div className="min-h-screen w-full bg-bg text-ink font-sans">
      <Nav active={screen} onNavigate={setScreen} />
      <main className="pt-24">
        <div key={screen} className="screen-enter">
          {screen === "inicio" ? <Hero onNavigate={setScreen} /> : pages[screen]}
        </div>
      </main>
      <Footer />
    </div>
  );
}

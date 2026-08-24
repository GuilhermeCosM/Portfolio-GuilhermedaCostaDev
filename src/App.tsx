import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { Sobre } from "./sections/Sobre";
import { Projetos } from "./sections/Projetos";
import { Skills } from "./sections/Skills";
import { Formacao } from "./sections/Formacao";
import { Contato } from "./sections/Contato";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-bg text-ink font-sans">
      <Nav />
      <Hero />
      <Sobre />
      <Projetos />
      <Skills />
      <Formacao />
      <Contato />
      <Footer />
    </div>
  );
}

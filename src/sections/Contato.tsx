import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Reveal } from "../components/Reveal";

const EMAIL = "guicostademelo3@gmail.com";
const GITHUB_URL = "https://github.com/guilhermecosm";
const LINKEDIN_URL = "https://www.linkedin.com/in/guilhermecostamelo/";

export function Contato() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="contato" className="px-6 py-32 md:py-36 border-t border-border">
      <Reveal className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center">
          <SectionEyebrow>Contato</SectionEyebrow>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-tight text-ink">
          Vamos conversar
        </h2>
        <p className="text-lg md:text-xl leading-8 mb-12 max-w-2xl mx-auto text-muted">
          Aberto a novas oportunidades e projetos. Me chama por e-mail ou nas redes abaixo.
        </p>

        <div className="flex justify-center mb-9">
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 px-6 md:px-7 py-4 rounded-full text-base md:text-lg bg-surface border border-border text-ink"
          >
            <Mail size={19} className="text-accent" />
            {EMAIL}
            {copied ? <Check size={17} className="text-accent" /> : <Copy size={17} className="text-muted" />}
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full border border-border text-ink hover:border-accent transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full border border-border text-ink hover:border-accent transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

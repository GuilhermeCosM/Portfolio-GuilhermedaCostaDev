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
    <section id="contato" className="px-6 py-28 border-t border-border">
      <Reveal className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center">
          <SectionEyebrow>Contato</SectionEyebrow>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-ink">
          Vamos conversar
        </h2>
        <p className="text-base mb-10 max-w-md mx-auto text-muted">
          Aberto a novas oportunidades e projetos. Me chama por e-mail ou nas redes abaixo.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm bg-surface border border-border text-ink"
          >
            <Mail size={15} className="text-accent" />
            {EMAIL}
            {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} className="text-muted" />}
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-border text-ink hover:border-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-border text-ink hover:border-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

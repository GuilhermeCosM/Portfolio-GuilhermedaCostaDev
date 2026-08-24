import { useState } from "react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { Check, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";

const EMAIL = "guicostademelo3@gmail.com";
const PHONE_DISPLAY = "(21) 98806-6989";
const GITHUB_URL = "https://github.com/guilhermecosm";
const LINKEDIN_URL = "https://www.linkedin.com/in/guilhermecostamelo/";

export function Contato() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  function handleCopyPhone() {
    navigator.clipboard?.writeText(PHONE_DISPLAY);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 1600);
  }

  return (
    <section id="contato" className="px-6 py-24 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <SectionEyebrow>contato</SectionEyebrow>
        <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-4">Entre em contato</h2>
        <p className="text-base mb-10 max-w-md mx-auto text-muted">
          Aberto a novas oportunidades e projetos. Me chama por e-mail ou nas redes abaixo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button
            onClick={handleCopy}
            className="font-mono flex items-center gap-2 px-5 py-3 rounded-md text-sm bg-surface border border-border"
          >
            <Mail size={15} className="text-copper" />
            {EMAIL}
            {copied ? <Check size={14} className="text-cyan" /> : <Copy size={14} className="text-muted" />}
          </button>
          <button
            onClick={handleCopyPhone}
            className="font-mono flex items-center gap-2 px-5 py-3 rounded-md text-sm bg-surface border border-border"
          >
            <Phone size={15} className="text-copper" />
            {PHONE_DISPLAY}
            {copiedPhone ? <Check size={14} className="text-cyan" /> : <Copy size={14} className="text-muted" />}
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-md border border-border hover:border-cyan transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-md border border-border hover:border-cyan transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

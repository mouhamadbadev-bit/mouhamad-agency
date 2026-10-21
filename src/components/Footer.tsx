import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-5 px-4">
        <a href="#accueil" className="text-xl font-black text-violet-400">
          AD
          <span className="ml-2 text-sm font-semibold text-white">
            Alpha Dieng
          </span>
        </a>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Alpha Dieng. Tous droits réservés.
        </p>

        <div className="flex items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-300">
            <FaGithub size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-300">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="text-slate-400 hover:text-cyan-300">
            <Mail size={18} />
          </a>
          <a href="#accueil" aria-label="Retour en haut" className="rounded-full border border-white/10 p-2 text-cyan-300">
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
} from "lucide-react";

type Props = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

const navLinks = [
  ["Accueil", "accueil"],
  ["À propos", "apropos"],
  ["Compétences", "competences"],
  ["Projets", "projets"],
  ["Services", "services"],
  ["Blog", "blog"],
  ["Contact", "contact"],
];

export default function Navbar({
  theme,
  onToggleTheme,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="container mx-auto flex min-h-18 items-center justify-between gap-4 px-4">
        <a href="#accueil" className="flex items-center gap-3">
          <span className="bg-linear
          -to-r from-violet-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent">
            AD
          </span>
          <span>
            <strong className="block text-sm text-white">
              Ibrahima ba
            </strong>
            <small className="text-xs text-slate-400">
              Front-end Developer
            </small>
          </span>
        </a>

        <button
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir ou fermer le menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-18 flex-col gap-5 border-b border-white/10 bg-slate-950 p-5 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {label}
            </a>
          ))}

          <button
            onClick={onToggleTheme}
            className="flex items-center justify-center rounded-lg border border-white/15 p-2 text-white hover:border-violet-400"
            aria-label="Changer le thème"
            title="Changer le thème"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/cv-alpha-dieng.pdf"
            download
            className="flex items-center justify-center gap-2 rounded-xl bg-linear
            -to-r from-violet-600 to-blue-500 px-4 py-3 text-sm font-semibold text-white"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
        </div>
      </nav>
    </header>
  );
}
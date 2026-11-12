import { useState } from "react";
import { skills } from "../data/portfolioData";
import { ArrowRight } from "lucide-react";
// 1. Importation des vrais logos depuis react-icons
import { FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  // 2. Fonction pour retourner le bon logo en fonction du nom de la compétence
  const getSkillIcon = (name: string, color: string) => {
    const props = { size: 24, style: { color } };
    
    switch (name) {
      case "React": return <FaReact {...props} />;
      case "TypeScript": return <SiTypescript {...props} />;
      case "JavaScript": return <FaJs {...props} />;
      case "Tailwind CSS": return <SiTailwindcss {...props} />;
      case "Git": return <FaGitAlt {...props} />;
      case "GitHub": return <FaGithub {...props} />;
      case "HTML5": return <FaHtml5 {...props} />;
      case "CSS3": return <FaCss3Alt {...props} />;
      default: return null;
    }
  };

  return (
    <section id="competences" className="section-anchor bg-slate-900/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-violet-400">Mes compétences</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Technologies que j'utilise
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Des outils pour créer des interfaces web modernes.
            </p>
          </div>

          <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-2 text-sm font-semibold text-violet-300">
            {showAll ? "Afficher moins" : "Voir toutes les compétences"}
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map((skill) => (
            <article key={skill.name} className="rounded-2xl border border-white/10 bg-slate-950 p-5 transition hover:border-violet-500/60">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5">
                {/* 3. On appelle la fonction ici à la place de skill.short */}
                {getSkillIcon(skill.name, skill.color)}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{skill.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
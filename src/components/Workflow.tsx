import { GitBranch, CheckCircle2 } from "lucide-react";
import { socialLinks } from "../data/portfolioData";
import img2 from "../assets/image2.jpg"

export default function Workflow() {
  const steps = [
    "Suivi des versions",
    "Branches Git",
    "Dépôts GitHub",
    "Collaboration",
  ];

  return (
    <section id="workflow" className="py-12">
      <div style={ {backgroundImage:`url(${img2})` } }     className=" container mx-auto grid items-center gap-8 rounded-2xl border border-violet-400/20  p-6 md:grid-cols-2 md:p-10">
        <div className="flex invisible items-center justify-center gap-8 text-violet-300">
          <GitBranch size={70} />
          {/* Utilisation de l'icône GitHub de Remix Icon avec une taille de 70px */}
          <i className="ri-github-fill " style={{ fontSize: '70px' }}></i>
        </div>

        <div>
          <p className="text-sm text-violet-400">Git & GitHub</p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Mon workflow de développement
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            J'utilise Git pour suivre les modifications de mes projets et
            GitHub pour héberger mon code.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {steps.map((step) => (
              <span key={step} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 size={15} className="text-cyan-400" />
                {step}
              </span>
            ))}
          </div>

          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex  rounded-lg border border-violet-400/50 px-4 py-2 text-sm text-white hover:bg-violet-400">
            Voir mon GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
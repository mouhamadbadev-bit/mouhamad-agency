import { GraduationCap, MapPin, Mail, FolderKanban, Code2 } from "lucide-react";
import { socialLinks } from "../data/portfolioData";


export default function About() {
  return (
    <section id="apropos" className="section-anchor border-b border-white/10 py-20">
      <div  className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-[0.8fr_1.4fr_0.7fr]">
        <div className="flex min-h-64 flex-col justify-end rounded-2xl border border-violet-400/20 bg-linear-to-br from-violet-950 to-slate-900 p-6">
          <span className="text-4xl font-black text-violet-300">{"</>"}</span>
          <p className="mt-4 text-xl font-bold text-white">Code. Build. Improve.</p>
          <p className="mt-2 text-sm text-slate-400">
            Le développement web est un apprentissage continu.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-violet-400">À propos de moi</p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Une passion, un objectif
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Je suis un développeur front-end basé au Sénégal. Je souhaite aider
            les entreprises et les particuliers à créer des sites modernes,
            accessibles et adaptés à leurs besoins. J'apprends continuellement
            et je développe mon portfolio projet après projet.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="shrink-0 text-cyan-400" />
              <div><strong className="text-sm text-white">Sénégal</strong><p className="text-xs text-slate-400">Localisation à personnaliser</p></div>
            </div>
            <div className="flex gap-3">
              <GraduationCap className="shrink-0 text-cyan-400" />
              <div><strong className="text-sm text-white">En apprentissage</strong><p className="text-xs text-slate-400">Développeur front-end</p></div>
            </div>
            <a href={`mailto:${socialLinks.email}`} className="flex gap-3 sm:col-span-2">
              <Mail className="shrink-0 text-cyan-400" />
              <div><strong className="text-sm text-white">Me contacter</strong><p className="text-xs text-slate-400">{socialLinks.email}</p></div>
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[
            { icon: GraduationCap, number: "En continu", label: "Apprentissage" },
            { icon: FolderKanban, number: "3+", label: "Projets de démonstration" },
            { icon: Code2, number: "100%", label: "Motivation" },
          ].map(({ icon: Icon, number, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900 p-4">
              <Icon className="text-violet-400" size={25} />
              <div><strong className="block text-lg text-white">{number}</strong><span className="text-xs text-slate-400">{label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
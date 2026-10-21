import { ArrowRight, Mail, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="section-anchor relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />

      <div className="container relative mx-auto grid items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-xs text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Salut, je suis
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Alpha{" "}
            <span className="bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Dieng
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Développeur{" "}
            <span className="text-violet-400">Front-end</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Je crée des interfaces web modernes, rapides et accessibles avec
            React, TypeScript, JavaScript et Tailwind CSS. Mon objectif :
            transformer des idées en expériences web utiles et performantes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projets" className="flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-5 py-3 font-semibold text-white">
              Voir mes projets <ArrowRight size={17} />
            </a>
            <a href="#contact" className="flex items-center gap-2 rounded-xl border border-violet-400/60 px-5 py-3 font-semibold text-white hover:bg-violet-500/10">
              <Mail size={17} /> Me contacter
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-300">
            {["React", "TypeScript", "JavaScript", "Tailwind CSS", "Git", "GitHub"].map((tech) => (
              <span key={tech} className="flex items-center gap-2">
                <Code2 size={14} className="text-cyan-400" /> {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex min-h-80 w-full max-w-md items-center justify-center">
          <div className="absolute inset-8 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="relative flex h-80 w-64 flex-col items-center justify-center rounded-t-[48%] rounded-b-2xl border border-violet-400/40 bg-linear-to-br from-violet-900/50 to-slate-900 shadow-2xl shadow-violet-900/20">
            <span className="text-8xl font-black text-violet-300">AD</span>
            <p className="mt-3 font-semibold text-white">Développeur Front-end</p>
            <p className="mt-2 text-xs text-slate-400">Ajoute ton portrait ici</p>
          </div>
          <div className="absolute -right-1 top-8 max-w-48 rounded-xl border border-cyan-400/30 bg-slate-950/95 p-4 shadow-xl">
            <p className="mb-2 text-xs text-violet-300">developer.ts</p>
            <code className="text-xs leading-6 text-cyan-300">
              const passion = "Web";<br />
              const goal = "Build";<br />
              const future = "Create";
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useMemo, useState } from "react";
import { Code2, ExternalLink, Search } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [category, setCategory] = useState("Tous");
  const [search, setSearch] = useState("");

  const categories = [
    "Tous",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        category === "Tous" || project.category === category;

      const searchableText = [
        project.title,
        project.description,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(search.toLowerCase())
      );
    });
  }, [category, search]);

  return (
    <section id="projets" className="section-anchor py-20">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-sm font-semibold text-violet-400">
          Mes réalisations
        </p>

        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Quelques projets
            </h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Des projets qui illustrent mes compétences en développement front-end.
            </p>
          </div>

          <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-3 py-2">
            <Search size={17} className="text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher..."
              aria-label="Rechercher un projet"
              className="w-36 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>
        </div>

        <div className="mb-7 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                category === item
                  ? "border-violet-500 bg-violet-600 text-white"
                  : "border-white/10 bg-slate-900 text-slate-300 hover:border-violet-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-violet-500/70"
            >
              <div className="flex h-48 items-center justify-center overflow-hidden bg-linear-to-br from-violet-950 to-slate-900">
                <img
                  src={project.image}
                  alt={`Capture du projet ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover p-1.5 hover:cursor-zoom-out"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="sr-only">{project.title}</span>
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold text-violet-400">
                  {project.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="my-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-cyan-400/10 px-2 py-1 text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 border-t border-white/10 pt-4">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-violet-300 hover:text-cyan-300"
                  >
                    <Code2 size={16} />
                    Voir le code
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-violet-300 hover:text-cyan-300"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-slate-400">
            Aucun projet trouvé.
          </p>
        )}
      </div>
    </section>
  );
}
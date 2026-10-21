import { BookOpen, ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "React",
    title: "Organiser un projet React",
    description: "Pourquoi séparer les composants, les données et les styles.",
  },
  {
    id: 2,
    category: "CSS",
    title: "Créer une interface responsive",
    description: "Adapter une interface aux mobiles, tablettes et ordinateurs.",
  },
  {
    id: 3,
    category: "Git",
    title: "Comprendre Git et GitHub",
    description: "Les bases pour suivre les changements dans un projet.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-anchor py-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold text-violet-400">Blog</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Notes de développement
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <BookOpen size={25} className="text-cyan-400" />
              <p className="mt-5 text-xs text-violet-300">{article.category}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{article.description}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-violet-300">
                En discuter <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
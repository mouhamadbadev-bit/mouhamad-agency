import { useState } from "react";
import { ArrowDown, ArrowUpRight, Code2, LayoutTemplate, PanelsTopLeft } from "lucide-react";
import { services } from "../data/portfolioData";

const icons = [LayoutTemplate, PanelsTopLeft, Code2];

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="section-anchor bg-slate-900/50 py-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold text-violet-400">Mes services</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Comment puis-je vous aider ?
        </h2>
        <p className="mt-3 mb-8 text-slate-400">
          Cliquez sur un service pour découvrir les détails.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            const isOpen = expanded === service.id;

            return (
              <article
                key={service.id}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-violet-500/60"
              >
                <Icon className="text-cyan-400" size={30} />

                <h3 className="mt-5 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                  aria-controls={`details-${service.id}`}
                  className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-cyan-300"
                >
                  {isOpen ? "Masquer les détails" : "Détails du service"}
                  {isOpen ? <ArrowDown size={16} /> : <ArrowUpRight size={16} />}
                </button>

                {isOpen && (
                  <ul
                    id={`details-${service.id}`}
                    className="mt-5 list-disc space-y-2 border-t border-white/10 pt-4 pl-5 text-sm leading-6 text-slate-300"
                  >
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="temoignages" className="section-anchor bg-slate-900/50 py-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold text-violet-400">Témoignages</p>
        <h2 className="mt-2 text-3xl font-bold text-white">
          Ce qu'ils disent de moi
        </h2>

        <div className="mt-8 max-w-2xl rounded-2xl border border-white/10 bg-slate-950 p-6">
          <Quote size={28} className="text-cyan-400" />
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Tu pourras afficher ici un témoignage réel d'un client, d'un
            collaborateur ou d'une personne ayant travaillé avec toi.
          </p>
          <p className="mt-5 text-sm font-semibold text-white">
            Témoignage à ajouter
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Remplace ce contenu avant la publication.
          </p>
        </div>
      </div>
    </section>
  );
}
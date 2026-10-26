import { useState, type FormEvent } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import { socialLinks } from "../data/portfolioData";

const formId = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    if (!formId || formId === "TON_ID_FORMSPREE") {
      setStatus("error");
      setError("Configure d'abord ton identifiant Formspree dans .env.local.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/xrpeaden`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Échec de l'envoi.");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Le message n'a pas pu être envoyé. Vérifie ta connexion et Formspree."
      );
    }
  }

  const whatsappUrl =
    `https://wa.me/${socialLinks.whatsapp}?text=` +
    encodeURIComponent(
      "Bonjour Mouhamad, je vous contacte depuis votre portfolio pour discuter d'un projet web."
    );

  return (
    <section id="contact" className="section-anchor py-20">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-violet-400">Contact</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Discutons de votre projet
          </h2>

          <p className="mt-4 max-w-lg leading-7 text-slate-400">
            Vous avez une idée de site web ou besoin d'une interface moderne ?
            Envoyez-moi un message.
          </p>

          <a
            href={`mailto:${socialLinks.email}`}
            className="mt-7 flex items-center gap-3 text-cyan-300"
          >
            <Mail size={20} />
            {socialLinks.email}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-fit items-center gap-3 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-500"
          >
            <MessageCircle size={20} />
            Me contacter sur WhatsApp
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-slate-900 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              Nom complet
              <input
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Votre nom"
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 p-3 text-white outline-none focus:border-violet-500"
              />
            </label>

            <label className="text-sm text-slate-300">
              Adresse e-mail
              <input
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                placeholder="vous@exemple.com"
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 p-3 text-white outline-none focus:border-violet-500"
              />
            </label>
          </div>

          <label className="block text-sm text-slate-300">
            Sujet
            <input
              name="subject"
              type="text"
              required
              minLength={3}
              maxLength={150}
              placeholder="Objet de votre message"
              className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 p-3 text-white outline-none focus:border-violet-500"
            />
          </label>

          <label className="block text-sm text-slate-300">
            Message
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              placeholder="Parlez-moi de votre projet..."
              className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-slate-950 p-3 text-white outline-none focus:border-violet-500"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-6 py-3 font-semibold text-white disabled:cursor-wait disabled:opacity-60"
          >
            {status === "sending" ? "Envoi en cours..." : "Envoyer"}
            <Send size={16} />
          </button>

          {status === "success" && (
            <p role="status" className="text-sm text-green-400">
              Message envoyé avec succès !
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <p className="text-xs leading-5 text-slate-500">
            Ce formulaire nécessite une configuration Formspree valide.
          </p>
        </form>
      </div>
    </section>
  );
}
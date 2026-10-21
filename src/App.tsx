import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { socialLinks } from "./data/portfolioData";

type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "light"
        ? "light"
        : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Le site fonctionne aussi si le navigateur bloque le stockage.
    }
  }, [theme]);

  const whatsappUrl =
    `https://wa.me/${socialLinks.whatsapp}?text=` +
    encodeURIComponent(
      "Bonjour Alpha, je vous contacte depuis votre portfolio pour discuter d'un projet web."
    );

  return (
    <div className="min-h-screen overflow-x-clip bg-slate-950 text-white">
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => current === "dark" ? "light" : "dark")
        }
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Workflow />
        <Blog />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter Alpha sur WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/20 transition hover:scale-105 hover:bg-green-400"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
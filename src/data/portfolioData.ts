import images1 from "../assets/1.png"
import images2 from "../assets/2.png"
import images3 from "../assets/3.png"
import images4 from "../assets/4.png"
import images5 from "../assets/5.png"
import images6 from "../assets/6.png"
import images7 from "../assets/7.png"
import images8 from "../assets/8.png"
import images9 from "../assets/9.png"
import images10 from "../assets/10.png"
import images11 from "../assets/11.png"

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  codeUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: " Agance Imobilier",
    category: "Application web",
    description:
      "Une plateforme web moderne et intuitive permettant de rechercher, filtrer et explorer des biens immobiliers de prestige avec une interface fluide.",
    image: images1,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/agence-immobilier2",
    liveUrl: "https://agence-immobilier2.vercel.app/",
  },
  {
    id: 2,
    title: "Agance Imobilier",
    category: "E-commerce",
    description:
      "Un site d'agence immobilière conçu pour valoriser les offres de location et de vente, facilitant la mise en relation entre acheteurs et vendeurs.",
    image: images2,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/agence-immobilier1",
    liveUrl: "https://agence-immobilier-five.vercel.app/",
  },
  {
    id: 3,
    title: "Agance Imobilier",
    category: "Productivité",
    description:
      "Une application web interactive pour découvrir des biens immobiliers détaillés, consulter les caractéristiques des logements et contacter facilement les conseillers.",
    image: images3,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/agence-immobilier1",
    liveUrl: "https://agence-immobilier-dlva-git-main-mouhamad-agency.vercel.app/",
  },
  {
    id: 4,
    title: "Projet-Hotelier",
    category: "Productivité",
    description:
      "Un hôtel de charme intimiste alliant design contemporain et confort chaleureux, offrant des suites spacieuses avec vue panoramique et un service de conciergerie personnalisé.",
    image:images4,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/projet-hotel2",
    liveUrl: "https://projet-hotel2.vercel.app/",
  },
   {
    id: 5,
    title: "Projet-Hotelier",
    category: "Productivité",
    description:
      "Un établissement urbain moderne et connecté, idéal pour les voyageurs d'affaires, proposant des espaces de coworking design, des salles de réunion high-tech et un accès rapide au centre-ville.",
    image: images5,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/projet-hotel3",
    liveUrl: "https://projet-hotel3.vercel.app/",
  },
   {
    id: 6,
    title: "Projet-Hotelier",
    category: "Productivité",
    description:
      "Un resort balnéaire éco-responsable niché au cœur d'une nature luxuriante, doté de villas privées avec piscines à débordement et d'un spa axé sur le bien-être holistique.",
    image: images6,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/projet-hotel",
    liveUrl: "https://projet-hotel-ten.vercel.app/",
  },
   {
    id: 7,
    title: "Projet-Hotelier",
    category: "Productivité",
    description:
      "Un hôtel minimaliste aux lignes épurées et éco-conçues, privilégiant les matériaux naturels, la lumière, et offrant une expérience de séjour apaisante et silencieuse.",
    image: images7,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/projet-hotel1",
    liveUrl: "https://projet-hotel1.vercel.app/",
  },
   {
    id: 8,
    title: "Projet-Hotelier",
    category: "Productivité",
    description:
      "Un hôtel de luxe installé dans un bâtiment historique rénové avec élégance, mariant le charme de l'ancien à des équipements domotiques de pointe pour un séjour inoubliable.",
    image: images8,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/Projet-hot-lier4",
    liveUrl: "https://projet-hotel-bbus.vercel.app/",
  },
   {
    id: 9,
    title: "Garage-Automobile",
    category: "Productivité",
    description:
     "Un centre de réparation automobile moderne proposant des diagnostics électroniques de pointe, de la mécanique générale et un entretien complet pour garantir la fiabilité de votre véhicule.",
    image: images9,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/garage-automobile",
    liveUrl: "https://garage-automobile.vercel.app/",
  },
   {
    id: 10,
    title: "Garage-Automobile",
    category: "Productivité",
    description:
      "Un garage de proximité spécialisé dans les interventions rapides (vidange, pneumatiques, système de freinage et géométrie) avec un service transparent et un devis immédiat.",
    image: images10,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/garage-automobile1/",
    liveUrl: "https://garage-automobile1.vercel.app/",
  },
   {
    id: 11,
    title: "Garage-Automobile",
    category: "Productivité",
    description:
      "Un atelier spécialisé dans la révision approfondie, la recherche de pannes complexes et l'optimisation des performances moteur, animé par une équipe de techniciens qualifiés.",
    image: images11,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/mouhamadbadev-bit/garage-automobile",
    liveUrl: "https://garage-automobile2-gamma.vercel.app/",
  },

];










export const skills = [
  {
    name: "React",
    short: "React", // Correction ici (valeur mise entre guillemets)
    description: "Interfaces dynamiques et composants réutilisables.",
    color: "#22d3ee",
  },
  {
    name: "TypeScript",
    short: "TS",
    description: "Un code plus fiable grâce au typage.",
    color: "#60a5fa",
  },
  {
    name: "JavaScript",
    short: "JS",
    description: "Logique, événements et manipulation des données.",
    color: "#facc15",
  },
  {
    name: "Tailwind CSS",
    short: "TW",
    description: "Interfaces modernes et responsive.",
    color: "#22d3ee",
  },
  {
    name: "Git",
    short: "G",
    description: "Gestion des versions du code.",
    color: "#fb7185",
  },
  {
    name: "GitHub",
    short: "GH",
    description: "Hébergement et partage de projets.",
    color: "#c4b5fd",
  },
  {
    name: "HTML5",
    short: "HTML",
    description: "Structure sémantique et accessible.",
    color: "#fb923c",
  },
  {
    name: "CSS3",
    short: "CSS",
    description: "Mise en page, animations et responsive design.",
    color: "#60a5fa",
  },
];

export const services = [
  {
    id: "vitrine",
    title: "Site vitrine",
    description: "Présenter une entreprise et ses services.",
    details: [
      "Page d'accueil et présentation de l'entreprise.",
      "Sections services, réalisations et contact.",
      "Design adapté aux téléphones et ordinateurs.",
      "Liens vers les réseaux sociaux.",
    ],
  },
  {
    id: "landing",
    title: "Landing page",
    description: "Présenter une offre et encourager une action.",
    details: [
      "Message principal et bouton d'action.",
      "Présentation des avantages de l'offre.",
      "Témoignages authentiques si disponibles.",
      "Formulaire de contact si nécessaire.",
    ],
  },
  {
    id: "react",
    title: "Interface React",
    description: "Créer une application web moderne.",
    details: [
      "Composants réutilisables.",
      "Données organisées et affichage dynamique.",
      "Connexion à une API si nécessaire.",
      "Code TypeScript structuré.",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "mouhamadba.dev@gmail.com",
  whatsapp: "221787460235",
};
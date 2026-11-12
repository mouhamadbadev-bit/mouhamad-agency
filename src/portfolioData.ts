import { Atom, FileCode, Cpu, Wind, GitBranch, Layers } from 'lucide-react';

export const SKILLS = [
  { name: 'React', category: 'frontend', level: 'Avancé', description: 'Création d\'interfaces dynamiques, composants réutilisables et gestion d\'état.', icon: Atom },
  { name: 'TypeScript', category: 'frontend', level: 'Intermédiaire', description: 'Code plus sûr, typage strict et maintenabilité accrue.', icon: FileCode },
  { name: 'JavaScript', category: 'frontend', level: 'Avancé', description: 'Logique, interactivité asynchrone et manipulation moderne du DOM.', icon: Cpu },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Avancé', description: 'Design rapide, responsive et sur-mesure avec un code propre.', icon: Wind },
  { name: 'HTML & CSS', category: 'frontend', level: 'Expert', description: 'Bases sémantiques solides, accessibilité (a11y), Flexbox, Grid et animations fluides.', icon: Layers },
  { name: 'Git & GitHub', category: 'tools', level: 'Intermédiaire', description: 'Gestion de version, branches, pull requests et travail en équipe.', icon: GitBranch },
];
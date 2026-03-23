export interface Technology {
  name: string
  color?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  imageUrl: string
  technologies: Technology[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  year: number
  category: "web" | "mobile" | "design" | "fullstack"
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Gestion des Étudiants - Application Java EE",
    description:
      "Application de gestion administrative pour une université avec Spring Boot et Hibernate.",
    longDescription:
      "Développement d'une application web complète pour la gestion des inscriptions, des notes et des absences des étudiants. L'application permet aux administrateurs de gérer les filières, les modules et les emplois du temps. Interface utilisateur développée avec Thymeleaf et Bootstrap.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    technologies: [
      { name: "Spring Boot", color: "green" },
      { name: "Hibernate", color: "blue" },
      { name: "JPA", color: "orange" },
      { name: "Thymeleaf", color: "yellow" },
      { name: "Bootstrap", color: "purple" },
    ],
    githubUrl: "https://github.com/malaknh/gestion-etudiants",
    liveUrl: "",
    featured: true,
    year: 2024,
    category: "fullstack",
  },
  {
    id: "2",
    title: "E-commerce - Plateforme de vente en ligne",
    description: "Site e-commerce complet avec panier, authentification et paiement sécurisé.",
    longDescription:
      "Création d'une plateforme de vente en ligne avec React pour le front-end et Spring Boot pour le back-end. Gestion des produits, des catégories, du panier d'achat et du système de paiement intégré avec Stripe.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    technologies: [
      { name: "React", color: "blue" },
      { name: "Spring Boot", color: "green" },
      { name: "Hibernate", color: "blue" },
      { name: "MySQL", color: "orange" },
      { name: "Bootstrap", color: "purple" },
    ],
    githubUrl: "https://github.com/malaknh/ecommerce",
    liveUrl: "",
    featured: true,
    year: 2024,
    category: "fullstack",
  },
  {
    id: "3",
    title: "Blog Personnel - Laravel",
    description: "Plateforme de blog avec système d'articles, commentaires et authentification.",
    longDescription:
      "Développement d'un blog dynamique avec Laravel. Les utilisateurs peuvent publier des articles, commenter et interagir. Interface moderne avec Bootstrap et Alpine.js.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "PHP", color: "purple" },
      { name: "MySQL", color: "orange" },
      { name: "Bootstrap", color: "purple" },
      { name: "Alpine.js", color: "gray" },
    ],
    githubUrl: "https://github.com/malaknh/laravel-blog",
    liveUrl: "",
    featured: false,
    year: 2023,
    category: "web",
  },
  {
    id: "4",
    title: "Gestion de Bibliothèque - Spring Boot",
    description:
      "Application de gestion des emprunts et retours pour une bibliothèque universitaire.",
    longDescription:
      "Application web permettant la gestion des livres, des adhérents et des prêts. Implémentation des rôles (admin, bibliothécaire, utilisateur) avec Spring Security.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    technologies: [
      { name: "Spring Boot", color: "green" },
      { name: "Hibernate", color: "blue" },
      { name: "JPA", color: "orange" },
      { name: "Thymeleaf", color: "yellow" },
      { name: "Bootstrap", color: "purple" },
    ],
    githubUrl: "https://github.com/malaknh/gestion-bibliotheque",
    featured: false,
    year: 2023,
    category: "fullstack",
  },
  {
    id: "5",
    title: "Portfolio Personnel - React",
    description: "Site portfolio moderne avec animations et design responsive.",
    longDescription:
      "Création de mon portfolio personnel avec React, TypeScript et Tailwind CSS pour présenter mes projets et compétences.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: [
      { name: "React", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Tailwind CSS", color: "teal" },
    ],
    githubUrl: "https://github.com/malaknh/portfolio",
    liveUrl: "",
    featured: true,
    year: 2024,
    category: "web",
  },
]

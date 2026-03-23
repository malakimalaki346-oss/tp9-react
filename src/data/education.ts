export interface Institution {
  name: string
  logo?: string
  location: string
}

export interface Education {
  id: string
  degree: string
  field: string
  institution: Institution
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  grade?: string
}

export const educationData: Education[] = [
  {
    id: "1",
    degree: "Licence en Sciences Informatiques et Réseaux",
    field: "SIR - Développement d'Applications",
    institution: {
      name: "Faculté des Sciences et Techniques - FST Marrakech",
      location: "Marrakech, Maroc",
    },
    startDate: "2023",
    endDate: "2026",
    description:
      "Formation complète en informatique avec spécialisation en développement d'applications web et mobiles.",
    achievements: [
      "Projets académiques : Application de gestion avec Spring Boot, Site e-commerce avec Laravel",
      "Participation aux ateliers de développement organisés par la faculté",
      "Membre actif du club informatique",
      "Projet de fin d'année : Plateforme de gestion de bibliothèque",
    ],
    grade: "En cours",
  },
  {
    id: "2",
    degree: "Diplôme Universitaire d'Études Scientifiques et Techniques",
    field: "DUEST - Informatique",
    institution: {
      name: "Faculté des Sciences et Techniques - FST Marrakech",
      location: "Marrakech, Maroc",
    },
    startDate: "2021",
    endDate: "2023",
    description:
      "Formation universitaire en sciences et technologies avec spécialisation en informatique.",
    achievements: [
      "Obtention du diplôme avec mention",
      "Projet : Développement d'une application de gestion en PHP/MySQL",
      "Formation aux bases de la programmation et des algorithmes",
    ],
    grade: "Mention Bien",
  },
  {
    id: "3",
    degree: "Baccalauréat Sciences Mathématiques",
    field: "Sciences Mathématiques B",
    institution: {
      name: "Lycée Mohamed V",
      location: "Marrakech, Maroc",
    },
    startDate: "2020",
    endDate: "2021",
    description: "Baccalauréat série Sciences Mathématiques avec spécialité Mathématiques B.",
    achievements: [
      "Mention Très Bien au Baccalauréat",
      "Participation aux olympiades de mathématiques",
      "Membre du club scientifique du lycée",
    ],
    grade: "Mention Très Bien",
  },
]

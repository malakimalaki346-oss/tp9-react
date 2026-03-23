export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expiryDate?: string
  credentialId?: string
  imageUrl?: string
  skills: string[]
  badgeUrl?: string
}

export const certificationsData: Certification[] = [
  {
    id: "1",
    name: "Spring Framework & Hibernate",
    issuer: "Formation en ligne - Udemy",
    date: "2024",
    imageUrl: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=200&h=200&fit=crop",
    skills: ["Spring Boot", "Hibernate", "JPA", "REST API", "MVC"],
    badgeUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Laravel - Développement Web",
    issuer: "OpenClassrooms",
    date: "2024",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop",
    skills: ["Laravel", "PHP", "Eloquent ORM", "Blade", "REST API"],
    badgeUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "Bootstrap 5 - Création de sites responsives",
    issuer: "France Université Numérique",
    date: "2023",
    imageUrl: "https://images.unsplash.com/photo-1507721999475-af8c5ae6f9a1?w=200&h=200&fit=crop",
    skills: ["Bootstrap 5", "CSS Grid", "Flexbox", "Responsive Design"],
    badgeUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    name: "React.js - Les fondamentaux",
    issuer: "Simplon Maroc",
    date: "2024",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=200&h=200&fit=crop",
    skills: ["React", "Hooks", "Components", "State Management"],
    badgeUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop",
  },
  {
    id: "5",
    name: "Java Programming - Certification",
    issuer: "Oracle Academy",
    date: "2023",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=200&fit=crop",
    skills: ["Java", "OOP", "Collections", "JDBC"],
    badgeUrl: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=100&h=100&fit=crop",
  },
]

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface ProfileData {
  firstName: string
  lastName: string
  fullName: string
  title: string
  bio: string
  shortBio: string
  location: string
  email: string
  phone: string
  avatarUrl: string
  coverUrl: string
  skills: string[]
  languages: { name: string; level: string }[]
  socialLinks: SocialLink[]
}

export const profileData: ProfileData = {
  firstName: "Malak",
  lastName: "Nait Haddou",
  fullName: "Malak Nait Haddou",
  title: "Étudiante en Licence Informatique | Développeuse Full Stack en devenir",
  bio: "Étudiante passionnée en Licence Sciences Informatiques et Réseaux à la FST Marrakech. Je me spécialise dans le développement d'applications web avec Spring Boot, Hibernate, Laravel et React. Curieuse et déterminée, je cherche à acquérir de nouvelles compétences et à contribuer à des projets innovants.",
  shortBio:
    "Étudiante en Licence Informatique à Marrakech, passionnée par le développement web avec Spring Boot, Laravel et React.",
  location: "Marrakech, Maroc",
  email: "malak.nait-haddou@edu.fstmarrakech.ma",
  phone: "+212 6 12 34 56 78",
  avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  coverUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop",
  skills: [
    "Spring Boot",
    "Hibernate",
    "Laravel",
    "React.js",
    "Bootstrap",
    "Java",
    "PHP",
    "MySQL",
    "Git",
    "JavaScript",
  ],
  languages: [
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Intermédiaire" },
    { name: "Arabe", level: "Langue maternelle" },
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/malaknh", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/malaknh", icon: "Linkedin" },
  ],
}

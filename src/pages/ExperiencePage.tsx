import { SEO } from "@/components/SEO"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Code, Users, BookOpen } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Étudiante en Licence Informatique",
    company: "Faculté des Sciences et Techniques - FST Marrakech",
    location: "Marrakech, Maroc",
    period: "2023 - Présent",
    description:
      "Formation en Sciences Informatiques et Réseaux avec spécialisation en développement d'applications.",
    missions: [
      "Suivi des modules : Programmation Java, Base de données, Développement Web, Génie Logiciel",
      "Réalisation de projets académiques en Spring Boot, Hibernate et Laravel",
      "Participation aux ateliers de coding et hackathons organisés par la faculté",
      "Travail en équipe sur des projets de développement full stack",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "Laravel", "React", "MySQL", "Bootstrap"],
  },
  {
    id: 2,
    title: "Stagiaire Développeuse Web",
    company: "Agence Web Digitale - Marrakech",
    location: "Marrakech, Maroc",
    period: "Été 2024",
    description:
      "Stage pratique au sein d'une agence web pour renforcer mes compétences en développement.",
    missions: [
      "Participation au développement de sites vitrines avec Laravel et Bootstrap",
      "Création de composants réutilisables en React.js",
      "Intégration de maquettes Figma en code HTML/CSS",
      "Collaboration avec l'équipe sur des projets clients",
    ],
    technologies: ["Laravel", "React", "Bootstrap", "JavaScript", "Figma"],
  },
  {
    id: 3,
    title: "Membre Actif - Club Informatique",
    company: "FST Marrakech",
    location: "Marrakech, Maroc",
    period: "2023 - Présent",
    description: "Implication dans la vie associative pour organiser des événements tech.",
    missions: [
      "Organisation de sessions de formation sur les technologies web",
      "Participation à l'organisation du hackathon annuel de la faculté",
      "Animation d'ateliers sur Spring Boot et Laravel pour les étudiants",
      "Gestion des réseaux sociaux du club",
    ],
    technologies: ["Spring Boot", "Laravel", "Git", "Communication"],
  },
]

function ExperiencePage() {
  return (
    <>
      <SEO
        title="Parcours"
        description="Étudiante en Licence Sciences Informatiques et Réseaux à la FST Marrakech. Stage en développement web avec Laravel et React. Membre actif du club informatique organisant des formations et hackathons. Compétences en Spring Boot, Hibernate et technologies web modernes."
        keywords={[
          "parcours",
          "expérience professionnelle",
          "licence informatique",
          "fst marrakech",
          "stage développeuse web",
          "club informatique",
          "développement web",
          "spring boot",
          "hibernate",
          "laravel",
          "react",
          "bootstrap",
          "hackathon",
          "formation informatique",
        ]}
      />

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Mon Parcours
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Étudiante passionnée en Licence Informatique, je me forme aux technologies modernes du
            développement web
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-indigo-200 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative md:pl-16">
                <div className="absolute left-0 top-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center hidden md:flex">
                  {index === 0 && <GraduationCap className="w-8 h-8 text-indigo-600" />}
                  {index === 1 && <Code className="w-8 h-8 text-indigo-600" />}
                  {index === 2 && <Users className="w-8 h-8 text-indigo-600" />}
                </div>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-indigo-700">{exp.title}</h2>
                        <p className="text-lg font-semibold text-slate-800">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-slate-700 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Activités / Réalisations :
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-slate-600">
                        {exp.missions.map((mission, i) => (
                          <li key={i}>{mission}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Compétences / Technologies :</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-slate-50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperiencePage

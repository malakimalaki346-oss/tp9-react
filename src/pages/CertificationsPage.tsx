import { SEO } from "@/components/SEO"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileCheck, Award } from "lucide-react"

interface Certification {
  id: string
  name: string
  issuer: string
  instructor?: string
  date: string
  credentialId?: string
  credentialUrl?: string
  skills: string[]
  score?: string
  progress?: string
  category: string
  longDescription?: string
  badgeUrl?: string
}

const certificationsData: Certification[] = [
  {
    id: "hibernate-jpa-001",
    name: "Hibernate & JPA - Certification Professionnelle",
    issuer: "Certification Professionnelle",
    instructor: "Mohamed LACHGAR",
    date: "8 mars 2026",
    credentialId: "28-20a90158-33c0-4e1d-834c-a12cb2cb93",
    credentialUrl: "#",
    skills: ["Hibernate", "JPA", "JEE", "ORM", "Java Persistence"],
    score: "82%",
    progress: "100%",
    category: "Java EE",
    longDescription: "Certification professionnelle validant les compétences en Hibernate et JPA.",
    badgeUrl: "/certs/hibernate-jpa-badge.png"
  }
]

function CertificationsPage() {
  return (
    <>
      <SEO 
        title="Certifications"
        description="Certification professionnelle Hibernate & JPA obtenue avec un score de 82%."
        keywords={['certification', 'hibernate', 'jpa', 'java ee']}
      />
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Mes Certifications
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Certifications professionnelles obtenues dans le domaine du développement Java EE
          </p>
        </div>

        <div className="flex justify-center">
          {certificationsData.map((cert) => (
            <Card 
              key={cert.id} 
              className="max-w-md w-full overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 flex flex-col items-center justify-center h-64">
                {cert.badgeUrl ? (
                  <img 
                    src={cert.badgeUrl} 
                    alt={cert.name}
                    className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <Award className="w-32 h-32 text-indigo-500" />
                )}
                <Badge className="mt-4 bg-indigo-600 text-white">
                  {cert.category}
                </Badge>
              </div>
              
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold">{cert.name}</h2>
                <p className="text-sm text-slate-500">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Obtenue le {cert.date}</span>
                </div>
                
                {cert.instructor && (
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <FileCheck className="w-4 h-4" />
                    <span>Instructeur: {cert.instructor}</span>
                  </div>
                )}
                
                {cert.score && (
                  <div className="flex gap-2">
                    <Badge className="bg-green-100 text-green-700">
                      Score: {cert.score}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700">
                      Progression: {cert.progress}
                    </Badge>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default CertificationsPage
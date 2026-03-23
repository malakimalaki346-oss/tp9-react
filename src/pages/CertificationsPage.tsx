import { SEO } from "@/components/SEO"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, FileCheck, X, Award } from "lucide-react"

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
    longDescription:
      "Certification professionnelle validant les compétences en Hibernate et JPA pour le développement d'applications Java EE. Cette certification atteste de la maîtrise des concepts d'ORM, des mappings objet-relationnel, et des requêtes avancées avec JPA.",
    badgeUrl: "/certs/hibernate-jpa-badge.png",
  },
]

function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  return (
    <>
      <SEO
        title="Certifications"
        description="Certification professionnelle Hibernate & JPA obtenue avec un score de 82%. Formation validant les compétences en Java EE, ORM et développement d'applications d'entreprise. Instructeur : Mohamed LACHGAR."
        keywords={[
          "certification",
          "hibernate",
          "jpa",
          "java ee",
          "orm",
          "certification professionnelle",
          "hibernate certification",
          "jpa certification",
          "java persistence",
          "mohamed lachgar",
        ]}
        ogImage="/certs/hibernate-jpa-badge.png"
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
              className="max-w-md w-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 flex flex-col items-center justify-center h-64">
                {cert.badgeUrl ? (
                  <img
                    src={cert.badgeUrl}
                    alt={cert.name}
                    className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      console.error("Erreur chargement image:", cert.badgeUrl)
                      e.currentTarget.style.display = "none"
                    }}
                  />
                ) : (
                  <Award className="w-32 h-32 text-indigo-500" />
                )}
                <Badge className="mt-4 bg-indigo-600 text-white">{cert.category}</Badge>
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
                    <Badge className="bg-green-100 text-green-700">Score: {cert.score}</Badge>
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

        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <Card
              className="max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Détail du certificat</h2>
                <Button variant="ghost" size="icon" onClick={() => setSelectedCert(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 flex flex-col items-center">
                  {selectedCert.badgeUrl ? (
                    <img
                      src={selectedCert.badgeUrl}
                      alt={selectedCert.name}
                      className="w-48 h-48 object-contain"
                    />
                  ) : (
                    <Award className="w-40 h-40 text-indigo-500" />
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold">{selectedCert.name}</h3>
                  <p className="text-slate-500">{selectedCert.issuer}</p>
                </div>

                <div className="grid gap-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="font-medium">Date d'obtention</span>
                    <span className="text-slate-600">{selectedCert.date}</span>
                  </div>

                  {selectedCert.instructor && (
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium">Instructeur</span>
                      <span className="text-slate-600 font-semibold">
                        {selectedCert.instructor}
                      </span>
                    </div>
                  )}

                  {selectedCert.score && (
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium">Score</span>
                      <span className="text-green-600 font-semibold text-lg">
                        {selectedCert.score}
                      </span>
                    </div>
                  )}

                  {selectedCert.progress && (
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium">Progression</span>
                      <span className="text-blue-600 font-semibold">{selectedCert.progress}</span>
                    </div>
                  )}

                  {selectedCert.credentialId && (
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="font-medium mb-1">Identifiant du certificat</p>
                      <code className="text-xs text-slate-500 break-all">
                        {selectedCert.credentialId}
                      </code>
                    </div>
                  )}

                  {selectedCert.longDescription && (
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <p className="font-medium mb-1">Description</p>
                      <p className="text-slate-600 text-sm">{selectedCert.longDescription}</p>
                    </div>
                  )}

                  <div>
                    <p className="font-medium mb-2">Compétences validées</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-indigo-50 text-indigo-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}

export default CertificationsPage

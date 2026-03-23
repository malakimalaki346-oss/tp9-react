import { SEO } from "@/components/SEO"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { educationData } from "@/data/education"

function EducationPage() {
  return (
    <>
      <SEO
        title="Formation"
        description="Mon parcours académique : Baccalauréat avec mention Très Bien, DUEST en informatique, et Licence Sciences Informatiques et Réseaux (SIR) à la FST Marrakech. Formation en développement Java, Spring Boot, Hibernate et Laravel."
        keywords={[
          "formation",
          "licence informatique",
          "licence sir",
          "duest",
          "baccalauréat",
          "fst marrakech",
          "université marrakech",
          "informatique marrakech",
          "développement web",
          "java ee",
          "spring boot",
          "hibernate",
        ]}
      />

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Formation & Diplômes
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Un parcours académique solide alliant théorie et pratique
          </p>
        </div>

        <div className="grid gap-8">
          {educationData.map((edu) => (
            <Card key={edu.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-indigo-600" />
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-indigo-700">{edu.degree}</h2>
                    <p className="text-slate-700 font-medium">{edu.field}</p>
                    <p className="text-slate-600 mt-2">{edu.institution.name}</p>
                    <div className="flex items-center justify-center md:justify-start gap-1 text-slate-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span className="text-sm">{edu.institution.location}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-1 text-slate-500 mt-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-sm">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    {edu.grade && (
                      <Badge className="mt-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                        <Award className="w-3 h-3 mr-1" />
                        {edu.grade}
                      </Badge>
                    )}
                  </div>

                  <div className="md:w-2/3 p-6">
                    <p className="text-slate-700 mb-4">{edu.description}</p>
                    <div>
                      <h3 className="font-semibold text-indigo-600 mb-2">
                        Réalisations & Distinctions :
                      </h3>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-indigo-500 mt-1">▹</span>
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default EducationPage

import { SEO } from "@/components/SEO"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Rocket } from "lucide-react"
import { Link } from "react-router-dom"
import { profileData } from "@/data/profile"

function HomePage() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: "Développement",
      description: "Création d'applications web robustes avec Spring Boot, Hibernate et Laravel",
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "Design",
      description: "Interfaces modernes avec React, Tailwind CSS et Bootstrap",
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-500" />,
      title: "Innovation",
      description: "Veille technologique et projets académiques innovants",
    },
  ]

  return (
    <>
      <SEO
        title="Accueil"
        description={`${profileData.fullName} - ${profileData.title}. Étudiante en Licence Sciences Informatiques et Réseaux à la FST Marrakech. Découvrez mon parcours, mes projets Spring Boot, Hibernate, Laravel et mes certifications.`}
        keywords={[
          "accueil",
          "portfolio",
          "malak nait haddou",
          "développeuse web",
          "étudiante informatique",
          "fst marrakech",
          "licence sir",
          "spring boot",
          "hibernate",
          "laravel",
          "react",
          "développement web marrakech",
        ]}
        ogType="profile"
      />

      <div className="space-y-12">
        <section className="text-center space-y-6 py-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {profileData.fullName}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{profileData.title}</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                Découvrir mes travaux
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Me contacter</Link>
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 py-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </>
  )
}

export default HomePage

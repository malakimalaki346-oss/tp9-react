import { SEO } from "@/components/SEO"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import { projectsData, type Project } from "@/data/projects"

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { id: "all", label: "Tous" },
    { id: "fullstack", label: "Full Stack" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
  ]

  const filteredProjects =
    filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter)

  const featuredProjects = projectsData.filter((p) => p.featured)

  return (
    <>
      <SEO
        title="Projets"
        description="Découvrez mes projets de développement web et full stack réalisés avec Spring Boot, Hibernate, Laravel, React et Bootstrap. Applications de gestion, e-commerce, blog et portfolio."
        keywords={[
          "projets",
          "développement web",
          "spring boot",
          "hibernate",
          "laravel",
          "react",
          "bootstrap",
          "java ee",
          "full stack",
          "application de gestion",
          "e-commerce",
          "portfolio",
          "projets académiques",
        ]}
      />

      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Mes Réalisations
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Découvrez une sélection de projets qui reflètent mon expertise et ma passion pour le
            développement
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
              Projets phares
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech.name} variant="secondary">
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-slate-500">{project.year}</p>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Démo
                        </a>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project)}>
                      Détails
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                onClick={() => setFilter(cat.id)}
                className="rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden rounded-t-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech.name} variant="outline" className="text-xs">
                        {tech.name}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <Card
              className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader>
                <CardTitle>{selectedProject.title}</CardTitle>
                <CardDescription>{selectedProject.year}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="rounded-lg w-full"
                />
                <p>{selectedProject.longDescription || selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech.name}>{tech.name}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                {selectedProject.githubUrl && (
                  <Button asChild>
                    <a href={selectedProject.githubUrl} target="_blank">
                      GitHub
                    </a>
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.liveUrl} target="_blank">
                      Voir en ligne
                    </a>
                  </Button>
                )}
                <Button variant="ghost" onClick={() => setSelectedProject(null)}>
                  Fermer
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectsPage

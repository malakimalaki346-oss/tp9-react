import { SEO } from "@/components/SEO"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { profileData } from "@/data/profile"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSent(true)
    setTimeout(() => setIsSent(false), 3000)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github className="w-5 h-5" />,
    LinkedIn: <Linkedin className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
  }

  return (
    <>
      <SEO
        title="Contact"
        description={`Contactez ${profileData.fullName} pour toute opportunité de stage, alternance, projet ou collaboration. Étudiante en licence informatique à la FST Marrakech, spécialisée en développement Java EE, Spring Boot et Laravel.`}
        keywords={[
          "contact",
          "email",
          "téléphone",
          "recrutement",
          "stage informatique",
          "alternance développeuse",
          "collaboration",
          "fst marrakech",
          "développeuse marrakech",
        ]}
      />

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Me Contacter
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets, opportunités ou simplement
            échanger
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Informations</CardTitle>
              <CardDescription>Plusieurs moyens pour me joindre</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-slate-700 hover:text-indigo-600"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Téléphone</p>
                  <a
                    href={`tel:${profileData.phone}`}
                    className="text-slate-700 hover:text-indigo-600"
                  >
                    {profileData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Localisation</p>
                  <p className="text-slate-700">{profileData.location}</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-slate-500 mb-3">Réseaux sociaux</p>
                <div className="flex gap-3">
                  {profileData.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    >
                      {socialIcons[link.platform] || <Github className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
              <CardDescription>Je vous répondrai dans les plus brefs délais</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Nom complet</label>
                    <Input
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Sujet</label>
                  <Input
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea
                    placeholder="Votre message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  {isSent ? "Message envoyé !" : "Envoyer le message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ContactPage

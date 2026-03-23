import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, ExternalLink, FileCheck } from "lucide-react"

export interface CertificationType {
  id: string
  name: string
  issuer: string
  instructor?: string
  date: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  imageUrl?: string
  badgeUrl?: string
  skills: string[]
  score?: string
  progress?: string
  category: string
}

interface CertificationCardProps {
  certification: CertificationType
  onClick?: () => void
}

export function CertificationCard({ certification, onClick }: CertificationCardProps) {
  return (
    <Card
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
          {certification.badgeUrl ? (
            <img
              src={certification.badgeUrl}
              alt={certification.name}
              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Award className="w-20 h-20 text-indigo-400" />
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
              {certification.category}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-lg line-clamp-2">{certification.name}</CardTitle>
          <CardDescription>{certification.issuer}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 space-y-3">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar className="w-4 h-4" />
            <span>Obtenue le {certification.date}</span>
          </div>

          {certification.instructor && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <FileCheck className="w-4 h-4" />
              <span>Instructeur: {certification.instructor}</span>
            </div>
          )}

          {certification.score && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Score: {certification.score}
              </Badge>
              {certification.progress && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Progression: {certification.progress}
                </Badge>
              )}
            </div>
          )}

          {certification.credentialId && (
            <p className="text-xs text-slate-400 font-mono truncate">
              ID: {certification.credentialId}
            </p>
          )}

          <div className="flex flex-wrap gap-1 pt-2">
            {certification.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {certification.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{certification.skills.length - 3}
              </Badge>
            )}
          </div>

          {certification.credentialUrl && (
            <div className="pt-2">
              <button
                className="w-full text-indigo-600 text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(certification.credentialUrl, "_blank")
                }}
              >
                Voir le certificat
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl">Malak Nait Haddou</CardTitle>
          <CardDescription>Développeuse Full Stack</CardDescription>
          <div className="flex justify-center gap-2 mt-2">
            <Badge>React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center">
            Portfolio en cours de construction avec React, TypeScript et shadcn/ui
          </p>
          <div className="flex gap-4 justify-center">
            <Button>Accueil</Button>
            <Button variant="outline">Projets</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App

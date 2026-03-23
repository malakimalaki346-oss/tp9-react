import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

function RootLayout() {
  const navigationItems = [
    { path: "/", label: "Accueil", icon: "🏠" },
    { path: "/projects", label: "Réalisations", icon: "💻" },
    { path: "/experience", label: "Parcours", icon: "📋" },
    { path: "/education", label: "Formations", icon: "🎓" },
    { path: "/certifications", label: "Attestations", icon: "📜" },
    { path: "/contact", label: "Échange", icon: "✉️" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link to="/" className="group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                MNH
              </h1>
              <p className="text-xs text-slate-500 group-hover:text-indigo-600 transition-colors">
                Portfolio
              </p>
            </Link>

            <nav className="flex flex-wrap gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 flex items-center gap-1"
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} - Conçu avec 🎨 par Malak Nait Haddou</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout

import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout"

// Import des pages - utiliser @/ au lieu de src/
import HomePage from "@/pages/HomePage"
import ProjectsPage from "@/pages/ProjectsPage"
import ExperiencePage from "@/pages/ExperiencePage"
import EducationPage from "@/pages/EducationPage"
import CertificationsPage from "@/pages/CertificationsPage"
import ContactPage from "@/pages/ContactPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
      {
        path: "education",
        element: <EducationPage />,
      },
      {
        path: "certifications",
        element: <CertificationsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
])

export default router

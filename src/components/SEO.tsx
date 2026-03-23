import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  noIndex?: boolean
}

const defaultKeywords = [
  "portfolio",
  "développeuse",
  "react",
  "typescript",
  "spring boot",
  "hibernate",
  "laravel",
  "marrakech",
  "fst marrakech",
]

const siteUrl = "https://malak-nait-haddou.vercel.app"
const defaultImage = "/og-image.png"

export function SEO({
  title,
  description,
  keywords = [],
  ogImage = defaultImage,
  ogType = "website",
  noIndex = false,
}: SEOProps) {
  const fullTitle = `${title} | Malak Nait Haddou - Portfolio`
  const allKeywords = [...defaultKeywords, ...keywords].join(", ")

  return (
    <Helmet>
      {/* Balises de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Malak Nait Haddou" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Indexation */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Malak Nait Haddou Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@malaknh" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Helmet>
  )
}

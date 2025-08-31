// Deprecated: SEO handled by Next.js metadata API

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const defaultSEO = {
  title: 'LawVriksh',
  description: 'Join LawVriksh, the premier platform for legal professionals',
  keywords: 'lawvriksh, Law Vriksh',
  image: 'https://lawvriksh.com/assets/lawvriksh-og-image.png',
  url: 'https://lawvriksh.com',
  type: 'website'
};

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData,
  noIndex = false
}: SEOProps) {
  const seoTitle = title ? `${title} | LawVriksh` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;

  // SEO handled by Next.js metadata; legacy component is a no-op in Next build
  return null;
}
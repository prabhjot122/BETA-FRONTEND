// SEO data for different pages
export const seoData = {
  homepage: {
    title: 'Law Vriksh',
    description: 'Join Law Vriksh, the premier platform for legal professionals.',
    keywords: 'lawvriksh,Law Vriksh',
    url: 'https://lawvriksh.com',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LawVriksh",
      "description": "Legal professionals platform for referrals and networking",
      "url": "https://lawvriksh.com",
      "logo": "https://lawvriksh.com/assets/logo.png",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "LawVriksh Team"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://twitter.com/lawvriksh",
        "https://linkedin.com/company/lawvriksh"
      ],
      "offers": {
        "@type": "Offer",
        "description": "Legal referral and networking platform",
        "category": "Legal Services"
      }
    }
  },
  
  privacyPolicy: {
    title: 'Privacy Policy',
    description: 'Learn how Law Vriksh collects, uses, and protects your personal information. Our comprehensive privacy policy for legal professionals.',
    keywords: 'privacy policy, data protection, legal platform privacy, LawVriksh privacy, personal information protection',
    url: 'https://lawvriksh.com/privacy-policy',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - LawVriksh",
      "description": "Privacy policy for LawVriksh legal professionals platform",
      "url": "https://lawvriksh.com/privacy-policy",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://lawvriksh.com"
      },
      "about": {
        "@type": "Thing",
        "name": "Privacy Policy"
      },
      "dateModified": "2025-08-04",
      "datePublished": "2025-08-01"
    }
  },

  about: {
    title: 'About Law Vriksh | Empowering Legal Voices in India',
    description: 'Law Vriksh — Where Legal Knowledge Grows and Spreads. Learn our story, mission, and why we exist.',
    keywords: 'about Law Vriksh,,about lawvriksh,Law Vriksh, legal writing platform, legal community India, lawyers and law students, mission',
    url: 'https://lawvriksh.com/about',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About LawVriksh",
      "description": "About LawVriksh — Where Legal Knowledge Grows and Spreads.",
      "url": "https://lawvriksh.com/about",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://lawvriksh.com"
      }
    }
  },

  thankYou: {
    title: 'Thank You for Joining',
    description: 'Thank you for joining LawVriksh! Welcome to India\'s premier legal professionals network. Check your email for next steps.',
    keywords: 'thank you, registration complete, legal network, LawVriksh welcome',
    url: 'https://lawvriksh.com/thank-you',
    noIndex: true, // This page shouldn't be indexed
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Thank You - LawVriksh",
      "description": "Registration confirmation page for LawVriksh",
      "url": "https://lawvriksh.com/thank-you",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://lawvriksh.com"
      }
    }
  },

  feedback: {
    title: 'Feedback & Support',
    description: 'Share your feedback with LawVriksh. Help us improve our legal professionals platform with your valuable insights.',
    keywords: 'feedback, support, legal platform feedback, LawVriksh support, user feedback',
    url: 'https://lawvriksh.com/feedback',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Feedback - LawVriksh",
      "description": "Feedback and support page for LawVriksh legal platform",
      "url": "https://lawvriksh.com/feedback",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://lawvriksh.com"
      }
    }
  },

  adminLogin: {
    title: 'Admin Login',
    description: 'Admin login portal for Law Vriksh platform management.',
    keywords: 'admin login, LawVriksh admin, platform management',
    url: 'https://lawvriksh.com/admin/login',
    noIndex: true, // Admin pages shouldn't be indexed
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Admin Login - LawVriksh",
      "description": "Admin login page for LawVriksh platform",
      "url": "https://lawvriksh.com/admin/login",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://lawvriksh.com"
      }
    }
  },

  notFound: {
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found. Return to LawVriksh homepage to explore our legal professionals platform.',
    keywords: '404, page not found, LawVriksh',
    url: 'https://lawvriksh.com/404',
    noIndex: true,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Page Not Found - LawVriksh",
      "description": "404 error page for LawVriksh",
      "url": "https://lawvriksh.com/404",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://lawvriksh.com"
      }
    }
  }
};

export type SEODataKey = keyof typeof seoData;

// Common icons configuration for all pages
export const commonIcons = {
  appleTouchIcon: '/apple-touch-icon.png',
  appleTouchIcon57: '/apple-touch-icon-57x57.png',
  appleTouchIcon60: '/apple-touch-icon-60x60.png',
  appleTouchIcon72: '/apple-touch-icon-72x72.png',
  appleTouchIcon76: '/apple-touch-icon-76x76.png',
  appleTouchIcon114: '/apple-touch-icon-114x114.png',
  appleTouchIcon120: '/apple-touch-icon-120x120.png',
  appleTouchIcon144: '/apple-touch-icon-144x144.png',
  appleTouchIcon152: '/apple-touch-icon-152x152.png',
  appleTouchIcon180: '/apple-touch-icon-180x180.png',
  favicon: '/favicon.ico',
  icon16: '/favicon-16x16.png',
  icon32: '/favicon-32x32.png',
};
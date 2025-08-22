// SEO data for different pages
export const seoData = {
  homepage: {
    title: 'LawVriksh - Legal Professionals Platform',
    description: 'Join LawVriksh, the premier platform for legal professionals.',
    keywords: 'legal professionals, legal networking, law practice, legal platform, advocate network, legal community India, lawyer platform',
    url: 'https://www.lawvriksh.com',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "LawVriksh",
      "description": "Legal professionals platform for referrals and networking",
      "url": "https://www.lawvriksh.com",
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
    description: 'Learn how LawVriksh collects, uses, and protects your personal information. Our comprehensive privacy policy for legal professionals.',
    keywords: 'privacy policy, data protection, legal platform privacy, LawVriksh privacy, personal information protection',
    url: 'https://www.lawvriksh.com/privacy-policy',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - LawVriksh",
      "description": "Privacy policy for LawVriksh legal professionals platform",
      "url": "https://www.lawvriksh.com/privacy-policy",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://www.lawvriksh.com"
      },
      "about": {
        "@type": "Thing",
        "name": "Privacy Policy"
      },
      "dateModified": "2025-08-04",
      "datePublished": "2025-08-01"
    }
  },

  thankYou: {
    title: 'Thank You for Joining',
    description: 'Thank you for joining LawVriksh! Welcome to India\'s premier legal professionals network. Check your email for next steps.',
    keywords: 'thank you, registration complete, legal network, LawVriksh welcome',
    url: 'https://www.lawvriksh.com/thank-you',
    noIndex: true, // This page shouldn't be indexed
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Thank You - LawVriksh",
      "description": "Registration confirmation page for LawVriksh",
      "url": "https://www.lawvriksh.com/thank-you",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://www.lawvriksh.com"
      }
    }
  },

  feedback: {
    title: 'Feedback & Support',
    description: 'Share your feedback with LawVriksh. Help us improve our legal professionals platform with your valuable insights.',
    keywords: 'feedback, support, legal platform feedback, LawVriksh support, user feedback',
    url: 'https://www.lawvriksh.com/feedback',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Feedback - LawVriksh",
      "description": "Feedback and support page for LawVriksh legal platform",
      "url": "https://www.lawvriksh.com/feedback",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://www.lawvriksh.com"
      }
    }
  },

  adminLogin: {
    title: 'Admin Login',
    description: 'Admin login portal for LawVriksh platform management.',
    keywords: 'admin login, LawVriksh admin, platform management',
    url: 'https://www.lawvriksh.com/admin/login',
    noIndex: true, // Admin pages shouldn't be indexed
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Admin Login - LawVriksh",
      "description": "Admin login page for LawVriksh platform",
      "url": "https://www.lawvriksh.com/admin/login",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://www.lawvriksh.com"
      }
    }
  },

  notFound: {
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found. Return to LawVriksh homepage to explore our legal professionals platform.',
    keywords: '404, page not found, LawVriksh',
    url: 'https://www.lawvriksh.com/404',
    noIndex: true,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Page Not Found - LawVriksh",
      "description": "404 error page for LawVriksh",
      "url": "https://www.lawvriksh.com/404",
      "isPartOf": {
        "@type": "WebSite",
        "name": "LawVriksh",
        "url": "https://www.lawvriksh.com"
      }
    }
  }
};

export type SEODataKey = keyof typeof seoData;
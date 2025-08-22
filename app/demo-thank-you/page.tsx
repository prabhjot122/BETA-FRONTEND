import type { Metadata } from "next";
import { Suspense } from "react";
import { seoData } from "../../legacy/src/utils/seoData";
import ThankYouClient from "../_clients/ThankYouClient";

export const metadata: Metadata = {
  title: seoData.thankYou.title,
  description: seoData.thankYou.description,
  robots: seoData.thankYou.noIndex ? { index: false, follow: false } : undefined,
  openGraph: {
    title: seoData.thankYou.title,
    description: seoData.thankYou.description,
    url: seoData.thankYou.url,
  },
  alternates: {
    canonical: seoData.thankYou.url,
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ThankYouClient />
    </Suspense>
  );
}


import type { Metadata } from "next";
import { seoData } from "../legacy/src/utils/seoData";

export const homeMetadata: Metadata = {
  title: seoData.homepage.title,
  description: seoData.homepage.description,

  openGraph: {
    title: seoData.homepage.title,
    description: seoData.homepage.description,
    url: seoData.homepage.url,
  },
  alternates: {
    canonical: seoData.homepage.url,
  },
};


import type { Metadata } from "next";
import { seoData } from "../../legacy/src/utils/seoData";
import AboutClient from "../_clients/AboutClient";

export const metadata: Metadata = {
  title: seoData.about?.title ?? "About Us",
  description: seoData.about?.description ?? "About LawVriksh",
  openGraph: {
    title: seoData.about?.title ?? "About Us",
    description: seoData.about?.description ?? "About LawVriksh",
    url: seoData.about?.url ?? "https://www.lawvriksh.com/about",
  },
  alternates: { canonical: seoData.about?.url ?? "https://www.lawvriksh.com/about" },
};

export default function Page() { return <AboutClient />; }


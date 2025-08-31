import type { Metadata } from "next";
import { seoData } from "../../legacy/src/utils/seoData";
import { createMetadataWithIcons } from "../../legacy/src/utils/metadata";
import FeedbackClient from "../_clients/FeedbackClient";

export const metadata: Metadata = createMetadataWithIcons({
  title: seoData.feedback.title,
  description: seoData.feedback.description,
  openGraph: {
    title: seoData.feedback.title,
    description: seoData.feedback.description,
    url: seoData.feedback.url,
  },
  alternates: {
    canonical: seoData.feedback.url,
  },
});

export default function Page() { return <FeedbackClient />; }


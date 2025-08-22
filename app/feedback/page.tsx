import type { Metadata } from "next";
import { seoData } from "../../legacy/src/utils/seoData";
import FeedbackClient from "../_clients/FeedbackClient";

export const metadata: Metadata = {
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
};

export default function Page() { return <FeedbackClient />; }


import type { Metadata } from "next";
import { seoData } from "../../legacy/src/utils/seoData";
import { createMetadataWithIcons } from "../../legacy/src/utils/metadata";
import PrivacyPolicyClient from "../_clients/PrivacyPolicyClient";

export const metadata: Metadata = createMetadataWithIcons({
  title: seoData.privacyPolicy.title,
  description: seoData.privacyPolicy.description,
  openGraph: {
    title: seoData.privacyPolicy.title,
    description: seoData.privacyPolicy.description,
    url: seoData.privacyPolicy.url,
  },
  alternates: {
    canonical: seoData.privacyPolicy.url,
  },
});

export default function Page() { return <PrivacyPolicyClient />; }


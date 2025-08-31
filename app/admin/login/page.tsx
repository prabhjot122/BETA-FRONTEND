import type { Metadata } from "next";
import { seoData } from "../../../legacy/src/utils/seoData";
import { createMetadataWithIcons } from "../../../legacy/src/utils/metadata";
import AdminLoginClient from "../../_clients/AdminLoginClient";

export const metadata: Metadata = createMetadataWithIcons({
  title: seoData.adminLogin.title,
  description: seoData.adminLogin.description,
  robots: { index: false, follow: false },
  alternates: {
    canonical: seoData.adminLogin.url,
  },
});

export default function Page() {
  return <AdminLoginClient />;
}


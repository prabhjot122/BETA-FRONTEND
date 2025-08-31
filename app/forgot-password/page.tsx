import type { Metadata } from "next";
import { createMetadataWithIcons } from "../../legacy/src/utils/metadata";
import ForgotPasswordClient from "../_clients/ForgotPasswordClient";

export const metadata: Metadata = createMetadataWithIcons({
  title: "Forgot Password",
  description: "Reset your account password.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://lawvriksh.com/forgot-password",
  },
});

export default function Page() { return <ForgotPasswordClient />; }


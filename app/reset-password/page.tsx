import type { Metadata } from "next";
import React, { Suspense } from "react";
import { createMetadataWithIcons } from "../../legacy/src/utils/metadata";
import ResetPasswordClient from "../_clients/ResetPasswordClient";

export const metadata: Metadata = createMetadataWithIcons({
  title: "Reset Password",
  description: "Enter your new password.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://lawvriksh.com/reset-password",
  },
});

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordClient />
    </Suspense>
  );
}


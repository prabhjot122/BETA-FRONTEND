import type { Metadata } from "next";
import React, { Suspense } from "react";
import ResetPasswordClient from "../_clients/ResetPasswordClient";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Enter your new password.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.lawvriksh.com/reset-password",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordClient />
    </Suspense>
  );
}


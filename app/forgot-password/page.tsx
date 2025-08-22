import type { Metadata } from "next";
import ForgotPasswordClient from "../_clients/ForgotPasswordClient";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your account password.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.lawvriksh.com/forgot-password",
  },
};

export default function Page() { return <ForgotPasswordClient />; }


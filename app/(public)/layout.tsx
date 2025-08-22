import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "LawVriksh",
  description: "Legal Professionals Platform",
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return children;
}


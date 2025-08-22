import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "LawVriksh - Legal Professionals Platform",
    template: "%s | LawVriksh",
  },
  description: "Join LawVriksh, the premier platform for legal professionals.",
};

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return children;
}


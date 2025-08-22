import type { Metadata } from "next";
import AdminDashboardClient from "../../_clients/AdminDashboardClient";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administration panel",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminDashboardClient />;
}


import type { Metadata } from "next";
import { createMetadataWithIcons } from "../../../legacy/src/utils/metadata";
import AdminDashboardClient from "../../_clients/AdminDashboardClient";

export const metadata: Metadata = createMetadataWithIcons({
  title: "Admin Dashboard",
  description: "Administration panel",
  robots: { index: false, follow: false },
});

export default function Page() {
  return <AdminDashboardClient />;
}


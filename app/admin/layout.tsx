"use client";
import React from "react";
import { useRouter } from "next/navigation";

// Lightweight client guard using localStorage, mirroring your ProtectedRoute
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  React.useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      const userData = localStorage.getItem("userData");
      const isAuthenticated = !!(token && userData);
      let isAdmin = false;
      if (userData) {
        try { isAdmin = JSON.parse(userData)?.is_admin === true; } catch {}
      }
      if (!isAuthenticated || !isAdmin) {
        router.replace("/admin/login");
      }
    } catch (e) {
      router.replace("/admin/login");
    }
  }, [router]);
  return <>{children}</>;
}


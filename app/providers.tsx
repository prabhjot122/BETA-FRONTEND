"use client";
import React from "react";
import { AuthProvider } from "../legacy/src/contexts/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}


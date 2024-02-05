import LayoutAuthenticate from "@/libs/components/Layout/Layout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutAuthenticate>{children}</LayoutAuthenticate>;
}

"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";

import Header from "./components/header";

import "./styles/globals.css";
import utilStyles from "./styles/utils.module.css";

import { Page } from "./types";

export const metadata: Metadata = {
  title: "Brian Zheng's Portfolio",
  description: "Includes About Me, Projects, and Contact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname().split("/", 2).join("/") as Page;

  return (
    <html lang="en" id="top">
      <body className={`${utilStyles.container}`}>
        <Header activePageRouter={path} />
        {children}
      </body>
    </html>
  );
}

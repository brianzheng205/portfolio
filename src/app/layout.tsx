import type { Metadata } from "next";

import "./styles/globals.css";
import utilStyles from "./styles/utils.module.css";

export const metadata: Metadata = {
  title: "Brian Zheng's Portfolio",
  description: "Includes About Me, Projects, and Contact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="top">
      <body className={utilStyles.container}>{children}</body>
    </html>
  );
}

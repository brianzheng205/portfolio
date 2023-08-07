import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

import "./globals.css";
import utilStyles from "./utils.module.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} + ${utilStyles.container}`}>
        {children}
      </body>
    </html>
  );
}

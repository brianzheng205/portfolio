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
  const pageRouters: { [key: string]: string } = {
    "About Me": "/",
    Projects: "/projects",
    Contact: "/contact",
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={utilStyles.container}>
          <div className={utilStyles.header}>
            <p className={utilStyles.name}>Brian Zheng</p>

            <div className={utilStyles.pageRoutersHeader}>
              {Object.keys(pageRouters)
                .reverse()
                .map((label) => (
                  <Link
                    className={utilStyles.pageRouter}
                    href={pageRouters[label]}
                  >
                    {label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

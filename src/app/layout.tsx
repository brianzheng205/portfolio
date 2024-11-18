import type { Metadata } from "next";

import Header from "./components/Header";
import SideBar from "./components/SideBar";

import "./globals.css";
import utilStyles from "./utils.module.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${utilStyles.container}`}>
        <Header />
        <SideBar />
        {children}
      </body>
    </html>
  );
}

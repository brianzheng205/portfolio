"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Page } from "../types";

import styles from "./Header.module.css";

const pageRouters: { [key in Page]: string } = {
  "About Me": "/",
  Experiences: "/experiences",
  Projects: "/projects",
  Contact: "/contact",
  Resume: "/resume",
};

/**
 * @returns The header of the website.
 */
export default function Header() {
  const path = usePathname().split("/", 2).join("/") as Page;

  return (
    <div className={styles.container}>
      <div className={styles.name}>Brian Zheng</div>

      <div className={styles.pageRouters}>
        {Object.keys(pageRouters)
          .reverse()
          .map((label) => {
            const pageKey = label as Page;
            const route = pageRouters[pageKey];

            return (
              <div key={label}>
                <Link
                  className={route === path ? styles.active : styles.inactive}
                  href={route}
                >
                  {label}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

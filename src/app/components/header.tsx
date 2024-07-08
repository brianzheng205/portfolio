import Link from "next/link";

import { Page } from "../types";

import styles from "./header.module.css";

const pageRouters: { [key in Page]: string } = {
  "About Me": "/",
  Experiences: "/experiences",
  Projects: "/projects",
  Contact: "/contact",
  Resume: "/resume",
};

/**
 * Creates the header of the website.
 *
 * @param activePageRouter The current page the user is on.
 * @returns The header of the website.
 */
export default function Header(props: { activePageRouter: Page }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Brian Zheng</div>

      <div className={styles["page-routers"]}>
        {Object.keys(pageRouters)
          .reverse()
          .map((label) => {
            const pageKey = label as Page;
            const route = pageRouters[pageKey];

            return (
              <div
                key={label}
                className={
                  route === props.activePageRouter
                    ? styles.active
                    : styles.inactive
                }
              >
                <Link href={route}>{label}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

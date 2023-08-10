import Link from "next/link";

import { Page } from "../types";

import utilStyles from "../styles/utils.module.css";

const pageRouters: { [key in Page]: string } = {
  "About Me": "/",
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
    <div className={utilStyles.header}>
      <div className={utilStyles.name}>Brian Zheng</div>

      <div className={utilStyles.pageRouters}>
        {Object.keys(pageRouters)
          .reverse()
          .map((label) => {
            const pageKey = label as Page;

            return (
              <Link
                className={
                  label === props.activePageRouter
                    ? utilStyles.pageRouterActive
                    : utilStyles.pageRouterInactive
                }
                href={pageRouters[pageKey]}
                key={label}
              >
                {label}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

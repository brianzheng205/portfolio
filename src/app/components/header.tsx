import Link from "next/link";

import { Page } from "../types";
import utilStyles from "../styles/utils.module.css";

const pageRouters: { [key in string]: string } = {
  "About Me": "/",
  Projects: "/projects",
  Contact: "/contact",
};

/**
 * Returns the header of the website.
 *
 * @param activePageRouter
 * @returns
 */
export default function Header(props: { activePageRouter: Page }) {
  return (
    <div className={utilStyles.header}>
      <div className={utilStyles.name}>Brian Zheng</div>

      <div className={utilStyles.pageRouters}>
        {Object.keys(pageRouters)
          .reverse()
          .map((label) => (
            <Link
              className={
                label === props.activePageRouter
                  ? utilStyles.pageRouterActive
                  : utilStyles.pageRouterInactive
              }
              href={pageRouters[label]}
              key={label}
            >
              {label}
            </Link>
          ))}
      </div>
    </div>
  );
}

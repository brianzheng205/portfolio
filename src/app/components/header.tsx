import Link from "next/link";

import { Page } from "../types";
import utilStyles from "../utils.module.css";

const pageRouters: { [key: string]: string } = {
  "About Me": "/",
  Projects: "/projects",
  Contact: "/contact",
};

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
            >
              {label}
            </Link>
          ))}
      </div>
    </div>
  );
}

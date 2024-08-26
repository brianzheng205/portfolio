"use client";

import Link from "next/link";

import styles from "./Buttons.module.css";

/**
 * @param buttons A list of buttons to render with `label` and optionally a `link`.
 * @returns A container of buttons in a row format.
 */
export default function Buttons(props: {
  buttons: { label: string; link?: string }[];
}) {
  return (
    <div className={styles.buttonsRow}>
      {props.buttons.map((button) =>
        button.link === undefined ? (
          <div className={styles.button} key={button.label}>
            {button.label}
          </div>
        ) : isLocalPath(button.link) ? (
          <Link
            className={`${styles.button} ${styles.clickable}`}
            key={button.label}
            href={button.link}
          >
            {button.label}
          </Link>
        ) : (
          <a
            className={`${styles.button} ${styles.clickable}`}
            key={button.label}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button.label}
          </a>
        )
      )}
    </div>
  );
}

function isLocalPath(path: string): boolean {
  return path.startsWith("/");
}

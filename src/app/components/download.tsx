"use client";

import styles from "./image-text-row.module.css";

/**
 * Creates a download button.
 *
 * @param text The text to display on the button.
 * @returns A download button.
 */
export default function Download(props: { text: string }) {
  return (
    <a className={styles.button} href="/Resume.pdf" download={true}>
      {props.text}
    </a>
  );
}

"use client";

import styles from "./buttons.module.css";

/**
 *
 * @param buttons A list of buttons to render with labels and onClick functions.
 * @returns A container of buttons in a row format.
 */
export default function Buttons(props: {
  buttons: { label: string; onClick?: () => void }[];
}) {
  return (
    <div className={styles.buttonsRow}>
      {props.buttons.map((button) => (
        <div
          className={`${styles.button} ${button.onClick && styles.clickable}`}
          key={button.label}
          onClick={button.onClick}
        >
          {button.label}
        </div>
      ))}
    </div>
  );
}

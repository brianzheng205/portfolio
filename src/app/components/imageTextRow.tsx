import Image from "next/image";
import Link from "next/link";

import { ImageTextRowInfo } from "../types";
import styles from "../styles/projects.module.css";

/**
 * Creates a row with an image on one side and text on the other.
 *
 * @param imageSrc Source of the image.
 * @param title Title of the text.
 * @param [metadata] Metadata of the text.
 * @param body Body of the text.
 * @param [buttons] Buttons to display at the bottom of the text.
 * @param [pictureLeft] Whether the image should be on the left or right.
 * @returns a row with an image on one side and text on the other.
 */
export default function imageTextRow({
  imageSrc,
  title,
  metadata = "",
  body,
  buttons = {},
  pictureLeft = true,
}: ImageTextRowInfo) {
  function createButtonRows(): { label: string; link: string }[][] {
    const rows: { label: string; link: string }[][] = [];
    let currentRow: { label: string; link: string }[] = [];

    Object.keys(buttons).forEach((buttonKey, index) => {
      currentRow.push({ label: buttonKey, link: buttons[buttonKey] });

      if (
        currentRow.length === 3 ||
        index === Object.keys(buttons).length - 1
      ) {
        rows.push(currentRow);
        currentRow = [];
      }
    });

    return rows;
  }

  return (
    <div className={pictureLeft ? styles.projectLeft : styles.projectRight}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={title}
        height={imageHeight}
        width={imageWidth}
      />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        {metadata !== "" && <p>{metadata}</p>}
        <p>{body}</p>

        <div className={styles.buttonsRow}>
          {Object.keys(buttons).map((label) =>
            isLocalPath(buttons[label]) ? (
              <Link className={styles.button} key={label} href={buttons[label]}>
                {`${label} ➜`}
              </Link>
            ) : (
              <a
                className={styles.button}
                key={label}
                href={buttons[label]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${label} ➜`}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

const aspectRatio = 3 / 2;
export const imageHeight = 300;
export const imageWidth = imageHeight * aspectRatio;

function isLocalPath(path: string): boolean {
  return path.startsWith("/");
}

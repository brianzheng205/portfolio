import Image from "next/image";
import Link from "next/link";

import loadingTime from "../data/loading";
import { ImageTextRowInfo } from "../types";
import styles from "../styles/projects.module.css";

/**
 * Renders a row with an image on one side and text on the other.
 *
 * @param imageSrc The source of the image.
 * @param title The title of the text.
 * @param [metadata] The metadata of the text.
 * @param body The body of the text.
 * @param [links] The linked buttons to display at the bottom of the text.
 * @param [pictureLeft] The boolean that specifies whether the image should be on the left or right.
 * @param [priority] The boolean that specifies whether the image should be prioritized during loading.
 * @param [setLoading] The function for setting the loading state.
 * @returns A row with the image on one side and text on the other.
 */
export default function imageTextRow({
  imageSrc,
  title,
  metadata = "",
  body,
  links = {},
  pictureLeft = true,
  priority = false,
  setLoading,
}: ImageTextRowInfo) {
  const handleClick = () => {
    if (setLoading !== undefined) {
      setTimeout(() => {
        setLoading(true);
      }, loadingTime);
    }
  };

  return (
    <div className={pictureLeft ? styles.projectLeft : styles.projectRight}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={title}
        height={imageHeight}
        width={imageWidth}
        priority={priority}
      />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        {metadata !== "" && <p>{metadata}</p>}
        <p>{body}</p>

        <div className={styles.buttonsRow}>
          {Object.keys(links).map((label) =>
            isLocalPath(links[label]) ? (
              <Link
                className={styles.button}
                key={label}
                href={links[label]}
                onClick={handleClick}
              >
                {`${label} ➜`}
              </Link>
            ) : (
              <a
                className={styles.button}
                key={label}
                href={links[label]}
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

"use client";

import Image from "next/image";

import { ImageTextRowInfo } from "../types";
import Buttons from "./Buttons";

import styles from "./ImageTextRow.module.css";

const ASPECT_RATIO = 3 / 2;
export const IMAGE_HEIGHT = 300;
export const IMAGE_WIDTH = IMAGE_HEIGHT * ASPECT_RATIO;

/**
 * @param imageSrc The source of the image.
 * @param title The title of the text.
 * @param metadata The metadata of the text.
 * @param body The body of the text in Mission format.
 * @param links The links to display below the text.
 * @param pictureFirst Specifies whether the image should be displayed before the text.
 * @param priority Specifies whether the image should be prioritized in loading.
 * @returns A row with an image on one side and text on the other.
 */
export default function ImageTextRow({
  imageSrc,
  title,
  metadata = "",
  body,
  links = {},
  pictureFirst = true,
  priority = false,
}: ImageTextRowInfo) {
  return (
    <div
      className={
        pictureFirst ? styles.projectPicFirst : styles.projectTextFirst
      }
    >
      <div className={styles.imageContainer}>
        <h2>{title}</h2>

        {metadata !== "" && <p>{metadata}</p>}

        <Image
          className={styles.image}
          src={imageSrc}
          alt={title}
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          priority={priority}
        />
      </div>

      <div className={styles.text}>
        {Object.keys(body).map((key) => {
          const value = body[key];
          return (
            <div key={key}>
              <h3>{key}</h3>
              {typeof value === "string" ? (
                <p>{value}</p>
              ) : (
                <Buttons
                  buttons={value.map((resource) => ({
                    label: resource,
                  }))}
                />
              )}
            </div>
          );
        })}

        <Buttons
          buttons={Object.keys(links).map((label) => ({
            label: `${label} ➜`,
            link: links[label],
          }))}
        />
      </div>
    </div>
  );
}

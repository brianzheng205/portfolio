"use client";

import Image from "next/image";

import { ImageTextRowInfo } from "../types";
import Buttons from "./buttons";

import styles from "./image-text-row.module.css";

/**
 * @param imageSrc The source of the image.
 * @param title The title of the text.
 * @param [metadata] The metadata of the text.
 * @param body The body of the text in Mission format.
 * @param [links] The links to display below the text.
 * @param [pictureFirst] The boolean that specifies whether the image should be displayed before the text.
 * @param [priority] The boolean that specifies whether the image should be prioritized in loading.
 * @returns A row with an image on one side and text on the other.
 */
export default function imageTextRow({
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
      <Image
        className={styles.image}
        src={imageSrc}
        alt={title}
        height={imageHeight}
        width={imageWidth}
        priority={priority}
      />
      <div className={styles.text}>
        <h2>{title}</h2>
        {metadata !== "" && <p>{metadata}</p>}
        {Object.keys(body).map((key) => {
          const value = body[key];
          return (
            <div key={key}>
              <h3>{key}</h3>
              {typeof value === "string" ? (
                <p>{value}</p>
              ) : (
                <ul>
                  {value.map((resource) => (
                    <li key={resource}>{resource}</li>
                  ))}
                </ul>
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

const aspectRatio = 3 / 2;
export const imageHeight = 300;
export const imageWidth = imageHeight * aspectRatio;

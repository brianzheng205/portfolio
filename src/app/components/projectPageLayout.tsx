"use client";

import Image from "next/image";

import ImageTextRow, { IMAGE_WIDTH, IMAGE_HEIGHT } from "./ImageTextRow";
import Buttons from "./Buttons";

import { ProjectInfo } from "../types";

import utilStyles from "../utils.module.css";
import styles from "./ProjectPageLayout.module.css";

/**
 * Creates a project page.
 *
 * @param title The title of the project.
 * @param links The links of the project.
 * @param description The description of the project.
 * @param contributions The contributions of the project.
 * @param skills The skills used in the project.
 * @param imagesInfo The images at the bottom of the contributions.
 * @returns A project page.
 */
export default function ProjectPageLayout({
  title,
  links,
  description,
  contributions,
  skills,
  imagesInfo,
}: ProjectInfo) {
  let numImagesRendered = 0;

  return (
    <div className={utilStyles.column}>
      <div className={utilStyles.projectGroup}>
        <h1>{title}</h1>
        <div className={styles.buttonsRow}>
          {Object.keys(links).map((label) => (
            <a
              className={styles.button}
              key={label}
              href={links[label]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} ➜
            </a>
          ))}
        </div>

        {description.map((section) => {
          numImagesRendered++;
          return (
            <ImageTextRow
              key={section.title}
              {...section}
              priority={numImagesRendered <= 2}
            />
          );
        })}
      </div>

      <div className={utilStyles.projectGroup} id="contributions">
        <h1>My Contributions</h1>

        <Buttons
          buttons={skills.map((skill) => ({
            label: skill,
          }))}
        />

        {contributions.map((mission) => {
          numImagesRendered++;
          return (
            <ImageTextRow
              key={mission.title}
              {...mission}
              priority={numImagesRendered <= 2}
            />
          );
        })}

        <div className={styles.imagesRow}>
          {imagesInfo.map((imageInfo) => (
            <div className={styles.imageWithCaption} key={imageInfo.caption}>
              <Image
                className={styles.image}
                src={imageInfo.src}
                alt={imageInfo.caption}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
              />
              {imageInfo.caption}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef, RefObject } from "react";
import { Link as ScrollLink } from "react-scroll";

import ImageTextRow, { imageWidth, imageHeight } from "./imageTextRow";
import Buttons from "./buttons";

import { ProjectInfo } from "../types";

import utilStyles from "../utils.module.css";
import styles from "./image-text-row.module.css";

/**
 * Creates a project page.
 *
 * @param backLabel The label to go back to the previous page.
 * @param title The title of the project.
 * @param disclaimer The disclaimer of the project.
 * @param links The links of the project.
 * @param description The description of the project.
 * @param contributions The contributions of the project.
 * @param skills The skills used in the project.
 * @param imagesInfo The images at the bottom of the contributions.
 * @returns A project page.
 */
export default function ProjectPageLayout({
  title,
  disclaimer,
  links,
  description,
  contributions,
  skills,
  imagesInfo,
}: ProjectInfo) {
  const contributionsRef: RefObject<HTMLDivElement> = useRef(null);
  let numImagesRendered = 0;

  return (
    <div className={utilStyles.column}>
      <ScrollLink className={styles.upButton} to="top">
        To Top ⬆
      </ScrollLink>

      {/* Title */}
      <div className={utilStyles.projectGroup}>
        <h1>{title}</h1>
        <div className={styles.buttonsRow}>
          <ScrollLink className={styles.button} to="description">
            Go To Description ⬇
          </ScrollLink>
          <ScrollLink className={styles.button} to="contributions">
            Go To My Contributions ⬇
          </ScrollLink>
        </div>
      </div>

      {/* Description */}
      <div className={utilStyles.projectGroup} id="description">
        <h1>Description</h1>
        <p className={utilStyles.intro}>{disclaimer}</p>

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

      {/* My Contributions */}
      <div
        className={utilStyles.projectGroup}
        ref={contributionsRef}
        id="contributions"
      >
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
                width={imageWidth}
                height={imageHeight}
              />
              {imageInfo.caption}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

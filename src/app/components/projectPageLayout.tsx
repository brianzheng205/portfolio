"use client";

import NextLink from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, RefObject } from "react";
import { Link as ScrollLink } from "react-scroll";

import ImageTextRow, { imageWidth, imageHeight } from "./imageTextRow";

import loadingTime from "../data/loading";
import { ProjectInfo } from "../types";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

/**
 * Renders the layout of a project page.
 *
 * @param title The title of the project.
 * @param disclaimer The disclaimer of the project.
 * @param links The links of the project.
 * @param description The description of the project.
 * @param contributions The contributions of the project.
 * @param skills The skills used in the project.
 * @param imagesInfo The information of the images to be displayed after contributions.
 * @param [setLoading] The function for setting the loading state.
 * @returns The layout of a project page.
 */
export default function ProjectPageLayout({
  title,
  disclaimer,
  links,
  description,
  contributions,
  skills,
  imagesInfo,
  setLoading,
}: ProjectInfo) {
  const contributionsRef: RefObject<HTMLDivElement> = useRef(null);
  const [lastClickedSkill, setLastClickedSkill] = useState("");

  let numImagesRendered = 0;

  // Make sure the client environment is ready so that localStorage is available
  useEffect(() => {
    const storedLastSkill = localStorage.getItem("lastClickedSkill");

    if (storedLastSkill !== null) {
      setLastClickedSkill(storedLastSkill);
    }

    // Smooth scroll to contributions section if coming from About Me page
    const storedfromAboutMe = localStorage.getItem("fromAboutMe");

    if (storedfromAboutMe !== null && JSON.parse(storedfromAboutMe)) {
      contributionsRef.current?.scrollIntoView({
        behavior: "smooth",
      });

      localStorage.setItem("fromAboutMe", "false");
    }
  }, []);

  const handleClick = () => {
    if (setLoading !== undefined) {
      setTimeout(() => {
        setLoading(true);
      }, loadingTime);
    }
  };

  return (
    <div className={utilStyles.column}>
      <ScrollLink className={styles.upButton} to="top">
        To Top ⬆
      </ScrollLink>

      {/* Title */}
      <div className={styles.projectGroup}>
        <NextLink
          className={styles.backButton}
          href="/projects"
          onClick={handleClick}
        >
          ← Back To Projects
        </NextLink>
        <div className={styles.heading}>{title}</div>
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
      <div className={styles.projectGroup} id="description">
        <div className={styles.heading}>Description</div>
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
        className={styles.projectGroup}
        ref={contributionsRef}
        id="contributions"
      >
        <div className={styles.heading}>My Contributions</div>

        <div className={styles.skillsRow}>
          {skills.map((skill) => (
            <div
              className={`${styles.skill} ${
                skill === lastClickedSkill ? styles.skillClicked : ""
              }`}
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>

        {contributions.map((section) => {
          numImagesRendered++;
          return (
            <ImageTextRow
              key={section.title}
              {...section}
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

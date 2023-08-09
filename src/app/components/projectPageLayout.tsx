"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, RefObject } from "react";

import ImageTextRow, { imageWidth, imageHeight } from "./imageTextRow";
import { ProjectInfo } from "../types";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

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
  const [lastClickedSkill, setLastClickedSkill] = useState("");

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

  return (
    <div className={utilStyles.column} id="description">
      {/** Description */}
      <div className={styles.projectGroup}>
        <Link className={styles.backButton} href="/projects">
          ← Back To Projects
        </Link>
        <div className={styles.heading}>{title} | Description</div>
        <p className={utilStyles.intro}>{disclaimer}</p>

        <div className={styles.buttonsRow}>
          {Object.keys(links).map((label) => (
            <a
              className={styles.button}
              href={links[label]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} ➜
            </a>
          ))}
        </div>

        <p className={utilStyles.intro}>
          Scroll to the next section to see my contributions.
        </p>

        {description.map((section) => (
          <ImageTextRow {...section} key={section.title} />
        ))}
      </div>

      {/** My Contributions */}
      <div
        className={styles.projectGroup}
        ref={contributionsRef}
        id="contributions"
      >
        <div className={styles.heading}>{title} | My Contributions</div>

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

        {contributions.map((contribution) => (
          <ImageTextRow {...contribution} key={contribution.title} />
        ))}

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

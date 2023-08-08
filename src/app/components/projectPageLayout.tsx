"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import ImageTextRow, { imageWidth, imageHeight } from "./imageTextRow";
import { ProjectInfo } from "../types";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function ProjectPageLayout({
  title,
  disclaimer,
  websiteLink,
  description,
  contributions,
  skills,
  imagesInfo,
  handleScrollToSection,
}: ProjectInfo) {
  const [lastClickedSkill, setLastClickedSkill] = useState<string>("");

  // Load lastClickedSkill from Local Storage on component mount
  useEffect(() => {
    const storedLastSkill = localStorage.getItem("lastClickedSkill");

    if (storedLastSkill !== null) {
      setLastClickedSkill(JSON.parse(storedLastSkill));
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
        <a
          className={styles.button}
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out {title} ➜
        </a>
        <p className={utilStyles.intro}>
          Scroll to the next section to see my contributions.
        </p>

        {description.map((section) => (
          <ImageTextRow {...section} key={section.title} />
        ))}
      </div>

      {/** My Contributions */}
      <div className={styles.projectGroup} id="contributions">
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

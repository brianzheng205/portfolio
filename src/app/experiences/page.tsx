"use client";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

import data from "./data";

import ImageTextRow from "../components/imageTextRow";

export default function Experiences() {
  return (
    <div className={utilStyles.column}>
      <div className={styles.projectGroup}>
        <div className={styles.heading}>Experiences</div>
        {data.map((experience) => (
          <ImageTextRow {...experience} key={experience.title} />
        ))}
      </div>
    </div>
  );
}

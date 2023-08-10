"use client";

import { useState, useEffect } from "react";

import ImageTextRow from "../components/imageTextRow";
import Header from "../components/header";

import { allProjectsSkills, feauturedProjects } from "../data/featuredProjects";

import { Page } from "../types";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function Projects() {
  const [lastClickedSkill, setLastClickedSkill] = useState<string>("");

  // Make sure the client environment is ready so that localStorage is available
  useEffect(() => {
    const storedLastSkill = localStorage.getItem("lastClickedSkill");

    if (storedLastSkill !== null) {
      setLastClickedSkill(storedLastSkill);
    }
  }, []);

  return (
    <>
      <Header activePageRouter={Page.Projects} />
      <div className={utilStyles.column}>
        <div className={styles.projectGroup}>
          <div className={styles.heading}>Featured Projects</div>

          <div className={styles.skillsRow}>
            {allProjectsSkills.map((skill) => (
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

          {feauturedProjects.map((project) => (
            <ImageTextRow {...project} key={project.title} />
          ))}
        </div>
      </div>
    </>
  );
}

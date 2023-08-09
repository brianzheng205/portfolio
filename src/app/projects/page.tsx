"use client";

import { useState, useEffect } from "react";

import ImageTextRow from "../components/imageTextRow";
import Header from "../components/header";
import Loading from "../components/loading";

import { allProjectsSkills, feauturedProjects } from "../data/featuredProjects";
import { Page } from "../types";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function Projects() {
  const [loading, setLoading] = useState(false);
  const lastClickedSkill = localStorage.getItem("lastClickedSkill");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header activePageRouter={Page.Projects} setLoading={setLoading} />
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
                <ImageTextRow
                  {...project}
                  key={project.title}
                  setLoading={setLoading}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

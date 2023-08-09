"use client";

import Link from "next/link";
import { useState } from "react";

import Header from "./components/header";
import Loading from "./components/loading";

import loadingTime from "./data/loading";
import { categoryToSkills, skillToProjects, MIT } from "./data/aboutMe";
import { Page } from "./types";

import utilStyles from "./styles/utils.module.css";
import styles from "./styles/aboutMe.module.css";

export default function AboutMe() {
  const [loading, setLoading] = useState(false);
  const [colorMIT, setColorMIT] = useState(false);
  const [highlightMIT, setHighlightMIT] = useState(false);
  const [MITSkillsClicked, setMITSkillsClicked] = useState<Set<string>>(
    new Set()
  );

  const handleMITSkillClick = (skill: string) => {
    setMITSkillsClicked(
      (prevSkillsClicked) => new Set([...Array.from(prevSkillsClicked), skill])
    );
    setColorMIT(false);
    setHighlightMIT(false);

    setTimeout(() => {
      setColorMIT(true);
      setHighlightMIT(true);
    }, 200);
  };

  const handleProjectSkillClick = (skill: string) => {
    setTimeout(() => {
      setLoading(true);
    }, loadingTime);

    setColorMIT(false);
    localStorage.setItem("lastClickedSkill", skill);
    localStorage.setItem("fromAboutMe", "true");
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header activePageRouter={Page.AboutMe} setLoading={setLoading} />
          <div className={utilStyles.column}>
            <div className={utilStyles.heading}>
              Hi, I'm Brian Zheng. I'm a junior{" "}
              <span
                className={`${colorMIT ? styles.colorMIT : ""} ${
                  highlightMIT ? styles.highlightMIT : ""
                }`}
              >
                MIT
              </span>{" "}
              student majoring in CS with a 4.75 GPA.
            </div>

            <div className={utilStyles.intro}>
              <div>
                I am looking for a software engineer internship for Summer 2024.
              </div>
              <Link className={styles.link} href="/contact">
                Contact me
              </Link>
            </div>

            <div className={styles.instructions}>
              Click on a skill below to see where I've used it.
            </div>
            <div className={styles.skillsContainer}>
              {Object.keys(categoryToSkills).map((category) => (
                <div className={styles.list} key={category}>
                  <div className={styles.skillCategory}>{category}</div>
                  {categoryToSkills[category].map((skill) =>
                    skillToProjects[skill] === MIT ? (
                      <div
                        className={`${styles.skill} ${
                          MITSkillsClicked.has(skill)
                            ? styles.MITSkillClicked
                            : ""
                        }`}
                        key={skill}
                        onClick={() => handleMITSkillClick(skill)}
                      >
                        {skill}
                      </div>
                    ) : (
                      <Link
                        className={styles.skill}
                        href={skillToProjects[skill]}
                        key={skill}
                        onClick={() => handleProjectSkillClick(skill)}
                      >
                        {skill}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

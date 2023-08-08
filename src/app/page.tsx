"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import Header from "./components/header";
import { categoryToSkills, skillToProjects, MIT } from "./data/aboutMe";
import { Page } from "./types";

import utilStyles from "./styles/utils.module.css";
import styles from "./styles/aboutMe.module.css";

export default function AboutMe() {
  const [colorMIT, setColorMIT] = useState(false);
  const [highlightMIT, setHighlightMIT] = useState(false);
  const [clickedSkills, setClickedSkills] = useState<string[]>([]);
  const [lastClickedSkill, setLastClickedSkill] = useState<string>("");

  // Load clickedSkills and lastClickedSkill from Local Storage on component mount
  useEffect(() => {
    const storedSkills = localStorage.getItem("clickedSkills");
    const storedLastSkill = localStorage.getItem("lastClickedSkill");

    if (storedSkills !== null) {
      setClickedSkills(JSON.parse(storedSkills));
    }

    if (storedLastSkill !== null) {
      setLastClickedSkill(JSON.parse(storedLastSkill));
    }
  }, []);

  // Save clickedSkills to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("clickedSkills", JSON.stringify(clickedSkills));
  }, [clickedSkills]);

  // Save lastClickedSkill to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("lastClickedSkill", JSON.stringify(lastClickedSkill));
  }, [lastClickedSkill]);

  function updateClickedSkills(skill: string) {
    setLastClickedSkill(skill);

    if (!clickedSkills.includes(skill)) {
      setClickedSkills((prevClickedSkills) => [...prevClickedSkills, skill]);
    }
  }

  const handleMITSkillClick = (skill: string) => {
    setColorMIT(true);
    setHighlightMIT(true);
    updateClickedSkills(skill);

    setTimeout(() => {
      setHighlightMIT(false);
    }, 2000);
  };

  const handleProjectClick = (skill: string) => {
    setColorMIT(false);
    updateClickedSkills(skill);
  };

  return (
    <>
      <Header activePageRouter={Page.AboutMe} />
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
                      clickedSkills.includes(skill) ? styles.skillClicked : ""
                    }`}
                    key={skill}
                    onClick={() => handleMITSkillClick(skill)}
                  >
                    {skill}
                  </div>
                ) : (
                  <Link
                    className={`${styles.skill} ${
                      clickedSkills.includes(skill) ? styles.skillClicked : ""
                    }`}
                    href={skillToProjects[skill]}
                    key={skill}
                    onClick={() => handleProjectClick(skill)}
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
  );
}

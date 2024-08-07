"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { categoryToSkills, skillToProjects, MIT } from "./data";

import utilStyles from "./utils.module.css";
import styles from "./styles.module.css";

export default function AboutMe() {
  const [colorMIT, setColorMIT] = useState(false);
  const [highlightMIT, setHighlightMIT] = useState(false);
  const [MITSkillsClicked, setMITSkillsClicked] = useState<Set<string>>(
    new Set()
  );
  const [projectSkillsClicked, setProjectSkillsClicked] = useState<Set<string>>(
    new Set()
  );

  // Make sure local storage is available to set projectSkillsClicked
  useEffect(() => {
    const storedProjectSkills = localStorage.getItem("projectSkillsClicked");

    if (storedProjectSkills !== null) {
      setProjectSkillsClicked(new Set(JSON.parse(storedProjectSkills)));
    }

    const storedMITSkills = localStorage.getItem("MITSkillsClicked");

    if (storedMITSkills !== null) {
      setMITSkillsClicked(new Set(JSON.parse(storedMITSkills)));
    }
  }, []);

  const handleMITSkillClick = (skill: string) => {
    setColorMIT(false);
    setHighlightMIT(false);

    const newMITSkills = MITSkillsClicked.add(skill);
    setMITSkillsClicked(newMITSkills);
    localStorage.setItem(
      "MITSkillsClicked",
      JSON.stringify(Array.from(newMITSkills))
    );

    localStorage.setItem("lastClickedSkill", skill);

    setTimeout(() => {
      setColorMIT(true);
      setHighlightMIT(true);
    }, 200);
  };

  const handleProjectSkillClick = (skill: string) => {
    setColorMIT(false);

    const newSkillsClicked = projectSkillsClicked.add(skill);
    setProjectSkillsClicked(newSkillsClicked);
    localStorage.setItem(
      "projectSkillsClicked",
      JSON.stringify(Array.from(newSkillsClicked))
    );

    localStorage.setItem("lastClickedSkill", skill);
  };

  return (
    <div className={utilStyles.column}>
      <h1>
        I'm Brian Zheng. I'm graduating{" "}
        <span
          className={`${colorMIT ? styles.colorMIT : ""} ${
            highlightMIT ? styles.highlightMIT : ""
          }`}
        >
          MIT
        </span>{" "}
        in May 2025 with a Bachelor's of Science in Computer Science with a 4.8
        Major GPA and a 4.7 Overall GPA.
      </h1>
      <div className={utilStyles.intro}>
        <div>I am looking for a 2025 New Grad Software Engineering role.</div>
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
                    MITSkillsClicked.has(skill) ? styles.MITSkillClicked : ""
                  }`}
                  key={skill}
                  onClick={() => handleMITSkillClick(skill)}
                >
                  {skill}
                </div>
              ) : (
                <Link
                  className={`${styles.skill} ${
                    projectSkillsClicked.has(skill) ? styles.skillVisited : ""
                  }`}
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
  );
}

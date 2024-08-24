"use client";

import Link from "next/link";
import Image from "next/image";
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
      <div className={styles.profile}>
        <Image
          src="/profilePicture.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className={styles.profilePicture}
        />

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <h1>Name</h1>
            <p>Brian Zheng</p>
          </div>
          <div className={styles.infoItem}>
            <h1>Education</h1>
            <p>
              <span
                className={`${colorMIT ? styles.colorMIT : ""} ${
                  highlightMIT ? styles.highlightMIT : ""
                }`}
              >
                MIT
              </span>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h1>Grad Date</h1>
            <p>May 2025</p>
          </div>
          <div className={styles.infoItem}>
            <h1>Major</h1>
            <p>Computer Science</p>
          </div>
          <div className={styles.infoItem}>
            <h1>Overall GPA</h1>
            <p>4.8</p>
          </div>
          <div className={styles.infoItem}>
            <h1>Major GPA</h1>
            <p>4.7</p>
          </div>
        </div>
      </div>

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
                    MITSkillsClicked.has(skill) && styles.MITSkillClicked
                  }`}
                  key={skill}
                  onClick={() => handleMITSkillClick(skill)}
                >
                  {skill}
                </div>
              ) : (
                <Link
                  className={`${styles.skill} ${
                    projectSkillsClicked.has(skill) && styles.skillVisited
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

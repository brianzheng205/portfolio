"use client";

import Link from "next/link";
import { useState } from "react";

import Header from "./components/header";
import { Page } from "./types";
import utilStyles from "./utils.module.css";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  const [colorMIT, setColorMIT] = useState(false);
  const [highlightMIT, setHighlightMIT] = useState(false);

  const handleMITSkillClick = () => {
    console.log("MIT skill clicked");
    setColorMIT(true);
    setHighlightMIT(true);
    setTimeout(() => {
      setHighlightMIT(false);
    }, 2000);
  };

  const handleProjectClick = () => {
    console.log("Project clicked");
    setColorMIT(false);
  };

  // const skillToOnClick: { [key in Skill]: () => void } = {

  // };

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
        <div className={styles.intro}>
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
            <div className={styles.list}>
              <div className={styles.skillCategory}>{category}</div>
              {categoryToSkills[category].map((skill) =>
                skillToProjects[skill] === MIT ? (
                  <div
                    className={styles.skill}
                    key={skill}
                    onClick={handleMITSkillClick}
                  >
                    {skill}
                  </div>
                ) : (
                  <Link
                    className={styles.skill}
                    href={skillToProjects[skill]}
                    key={skill}
                    onClick={handleProjectClick}
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

const categoryToSkills: { [key: string]: string[] } = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "Assembly"],
  Technologies: [
    "Next.js",
    "React",
    "AWS",
    "APIs",
    "AI",
    "OpenAI",
    "CSS",
    "HTML",
    "VSCode",
    "Git",
  ],
};

const projects = "/projects";
const ideaNavigator = "/projects/ideaNavigator";
const bounce = "/projects/bounce";
const MIT = "MIT";

const skillToProjects: { [key: string]: string } = {
  Python: ideaNavigator,
  TypeScript: projects,
  JavaScript: projects,
  Java: MIT,
  C: MIT,
  Assembly: MIT,
  "Next.js": projects,
  React: projects,
  AWS: projects,
  APIs: projects,
  AI: ideaNavigator,
  OpenAI: ideaNavigator,
  CSS: projects,
  HTML: projects,
  VSCode: projects,
  Git: projects,
};

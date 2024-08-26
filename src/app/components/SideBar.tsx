"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileDownload,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./SideBar.module.css";

/**
 *
 * @returns A sidebar component that displays a list of icons for email, LinkedIn,
 * GitHub, and resume. The sidebar can be toggled to collapse or expand.
 */
export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const email = "brianzheng205@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/brian205/";
  const githubUrl = "https://github.com/brianzheng205";
  const resumeUrl = "/resume.pdf";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Copied brianzheng205@gmail.com to clipboard!");
    });
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.iconsContainer} ${
          isCollapsed ? styles.collapsed : ""
        }`}
      >
        <div className={styles.icon} onClick={handleCopyEmail}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
        <a
          className={styles.icon}
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className={styles.icon}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className={styles.icon}
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFileDownload} size="2x" />
        </a>
      </div>

      <div
        className={`${styles.verticalLine} ${
          isCollapsed ? styles.collapsed : ""
        }`}
      />

      <div className={styles.toggleButtonContainer} onClick={toggleSidebar}>
        <button className={styles.toggleButton}>
          <FontAwesomeIcon
            icon={isCollapsed ? faArrowRight : faArrowLeft}
            size="lg"
          />
        </button>
      </div>
    </div>
  );
}

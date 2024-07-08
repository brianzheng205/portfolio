"use client";

import { useState, useEffect } from "react";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/contact.module.css";

const email = "brianzheng205@gmail.com";

export default function Contact() {
  const [isSmallPortrait, setIsSmallPortrait] = useState(true);
  const [isSmallLandscape, setIsSmallLandscape] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mediaQueryPortrait = window.matchMedia(
      "(max-width: 1024px) and (orientation: portrait)"
    );
    const mediaQueryLandscape = window.matchMedia(
      "(max-width: 1024px) and (orientation: landscape)"
    );

    // Function to handle changes in media queries
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.media === "(max-width: 1024px) and (orientation: portrait)") {
        setIsSmallPortrait(event.matches);
      } else if (
        event.media === "(max-width: 1024px) and (orientation: landscape)"
      ) {
        setIsSmallLandscape(event.matches);
      }
    };

    // Add event listeners for media queries
    mediaQueryPortrait.addEventListener("change", handleMediaQueryChange);
    mediaQueryLandscape.addEventListener("change", handleMediaQueryChange);

    // Initial check for media query matches
    setIsSmallPortrait(mediaQueryPortrait.matches);
    setIsSmallLandscape(mediaQueryLandscape.matches);

    // Cleanup by removing event listeners when the component unmounts
    return () => {
      mediaQueryPortrait.removeEventListener("change", handleMediaQueryChange);
      mediaQueryLandscape.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className={utilStyles.column}>
      <div className={utilStyles.heading}>
        Feel free to contact me or learn more about me:
      </div>
      <div className={utilStyles.infoSection}>
        <div className={utilStyles.instructions}>
          Click my email to copy it or click the links to visit them.
        </div>

        <div className={styles.info} onClick={handleCopyEmail}>
          <div className={`${styles.contact} ${copied ? styles.copied : ""}`}>
            {copied ? "Copied!" : "Email"}
          </div>
          {email}
        </div>

        <a
          className={styles.info}
          href="https://www.linkedin.com/in/brian205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contact}>LinkedIn</div>
          {!isSmallPortrait && "https://www.linkedin.com/in/brian205"}
        </a>

        <a
          className={styles.info}
          href="https://github.com/brianzheng205"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contact}>GitHub</div>
          {!isSmallPortrait && "https://github.com/brianzheng205"}
        </a>
      </div>
    </div>
  );
}

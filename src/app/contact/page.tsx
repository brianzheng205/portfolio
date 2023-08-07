"use client";

import { useState } from "react";

import Header from "../components/header";
import { Page } from "../types";
import utilStyles from "../utils.module.css";
import styles from "./contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "brian205@mit.edu";
    navigator.clipboard.writeText(email);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>
      <Header activePageRouter={Page.Contact} />
      <div className={utilStyles.column}>
        <div className={utilStyles.heading}>
          Feel free to contact me or learn more about me:
        </div>
        <div className={styles.infoSection} onClick={handleCopyEmail}>
          <div className={styles.instructions}>
            Click my email to copy it or click the links to visit them.
          </div>

          <div className={styles.info}>
            <div className={`${styles.contact} ${copied ? styles.copied : ""}`}>
              {copied ? "Copied!" : "Email"}
            </div>
            brian205@mit.edu
          </div>

          <a
            className={styles.info}
            href="https://www.linkedin.com/in/brian205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.contact}>LinkedIn</div>
            https://www.linkedin.com/in/brian205
          </a>

          <a
            className={styles.info}
            href="https://github.com/brianzheng205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.contact}>GitHub</div>
            https://github.com/brianzheng205
          </a>
        </div>
      </div>
    </>
  );
}

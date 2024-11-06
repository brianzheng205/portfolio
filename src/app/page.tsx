"use client";

import Link from "next/link";
import Image from "next/image";

import utilStyles from "./utils.module.css";
import styles from "./styles.module.css";

export default function About() {
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
            <h1>Education</h1>
            <p>MIT</p>
          </div>
          <div className={styles.infoItem}>
            <h1>Major</h1>
            <p>Computer Science</p>
          </div>
          <div className={styles.infoItem}>
            <h1>GPA</h1>
            <p>4.7</p>
          </div>
        </div>
      </div>

      <div className={styles.linksContainer}>
        <Link className={styles.link} href="/experiences">
          <h2>Experiences</h2>
          <Image
            src="/company.png"
            alt="Briefcase"
            width={200}
            height={200}
            className={styles.linkPicture}
          />
        </Link>

        <Link className={styles.link} href="/projects">
          <h2>Projects</h2>
          <Image
            src="/briefcase.png"
            alt="Briefcase"
            width={200}
            height={200}
            className={styles.linkPicture}
          />
        </Link>
      </div>
    </div>
  );
}

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
            <h1>Name</h1>
            <p>Brian Zheng</p>
          </div>
          <div className={styles.infoItem}>
            <h1>Education</h1>
            <p>MIT</p>
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
    </div>
  );
}

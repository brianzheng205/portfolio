"use client";

import { useState } from "react";

import Header from "../components/header";
import Download from "../components/download";
import Loading from "../components/loading";

import { Page } from "../types";

import styles from "../styles/resume.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Resume() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header activePageRouter={Page.Resume} setLoading={setLoading} />
          <div className={utilStyles.column}>
            <div className={utilStyles.infoSection}>
              <div className={utilStyles.instructions}>
                Click the button below to download my resume.
              </div>
              <div className={styles.downloadCol}>
                <Download text="Download Resume" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

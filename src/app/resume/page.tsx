import Header from "../components/header";
import Download from "../components/download";

import { Page } from "../types";

import styles from "../styles/resume.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Resume() {
  return (
    <>
      <Header activePageRouter={Page.Resume} />
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
  );
}

import Header from "../components/header";
import Download from "../components/download";
import { Page } from "../types";

import styles from "../styles/contact.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Resume() {
  return (
    <>
      <Header activePageRouter={Page.Contact} />
      <div className={utilStyles.column}>
        <div className={styles.infoSection}>
          <div className={styles.instructions}>
            Click the button below to download my resume.
          </div>

          <Download text="Download Resume" />
        </div>
      </div>
    </>
  );
}

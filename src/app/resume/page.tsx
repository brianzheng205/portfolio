import Download from "../components/download";

import utilStyles from "../utils.module.css";
import styles from "./styles.module.css";

export default function Resume() {
  return (
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
  );
}

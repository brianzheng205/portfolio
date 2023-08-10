import DotLoader from "react-spinners/DotLoader";

import styles from "../styles/loading.module.css";

/**
 * Renders the loading screen.
 *
 * @returns The loading screen.
 */
export default function Loading() {
  return (
    <div className={styles.screen}>
      <div className={styles.col}>
        <DotLoader color="#9a9ffd" loading={true} />
        <h1>Redirecting</h1>
      </div>
    </div>
  );
}

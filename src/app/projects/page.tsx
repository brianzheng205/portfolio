import Image from "next/image";

import utilStyles from "../utils.module.css";
import styles from "./projects.module.css";

const aspectRatio = 1920 / 1080;
const imageHeight = 300;
const imageWidth = imageHeight * aspectRatio;

export default function Projects() {
  return (
    <>
      <div className={utilStyles.heading}>Featured Projects</div>
      <div className={styles.column}>
        <div className={styles.row}>
          <div className={styles.project}>
            <div className={styles.imageTitle}>Idea Navigator</div>
            <Image
              className={styles.image}
              src="/papers_navigator_dark.png"
              alt="Idea Navigator"
              height={imageHeight}
              width={imageWidth}
            />
            <div className={styles.imageDescription}>
              Idea Navigator is a web app used to cluster unorganized data based
              on similarity to display onto a 2D filed for easy navigation. It
              currently displays research papers, meetings, and Lex Fridman
              podcasts related to the Computational Biology Lab @ MIT.
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.imageTitle}>Idea Navigator</div>
            <Image
              className={styles.image}
              src="/papers_navigator_dark.png"
              alt="Idea Navigator"
              height={imageHeight}
              width={imageWidth}
            />
            <div className={styles.imageDescription}>
              Idea Navigator is a web app used to cluster unorganized data based
              on similarity to display onto a 2D filed for easy navigation. It
              currently displays research papers, meetings, and Lex Fridman
              podcasts related to the Computational Biology Lab @ MIT.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

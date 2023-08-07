import Link from "next/link";
import Image from "next/image";

import ImageTextRow, { imageWidth, imageHeight } from "./imageTextRow";
import { ImageInfo, ImageTextRowInfo } from "../types";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function ProjectPageLayout(props: {
  name: string;
  disclaimer: string;
  websiteLink: string;
  description: ImageTextRowInfo[];
  contributions: ImageTextRowInfo[];
  imagesInfo: ImageInfo[];
}) {
  return (
    <div className={utilStyles.column}>
      {/** Description */}
      <div className={styles.projectGroup}>
        <Link className={styles.backButton} href="/projects">
          ← Back To Projects
        </Link>
        <div className={styles.heading}>{props.name} | Description</div>
        <p className={utilStyles.intro}>{props.disclaimer}</p>
        <a
          className={styles.button}
          href={props.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out {props.name} ➜
        </a>
        <p className={utilStyles.intro}>
          Scroll to the next section to see my contributions.
        </p>

        {props.description.map((section) => (
          <ImageTextRow {...section} key={section.title} />
        ))}
      </div>

      {/** My Contributions */}
      <div className={styles.projectGroup}>
        <div className={styles.heading}>{props.name} | My Contributions</div>
        {props.contributions.map((contribution) => (
          <ImageTextRow {...contribution} key={contribution.title} />
        ))}

        <div className={styles.imagesRow}>
          {props.imagesInfo.map((imageInfo) => (
            <div className={styles.imageWithCaption} key={imageInfo.caption}>
              <Image
                className={styles.image}
                src={imageInfo.src}
                alt={imageInfo.caption}
                width={imageWidth}
                height={imageHeight}
              />
              {imageInfo.caption}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

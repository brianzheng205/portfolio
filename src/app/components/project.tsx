import Image from "next/image";
import Link from "next/link";

import { ProjectInfo } from "../types";
import styles from "../styles/projects.module.css";

const aspectRatio = 3 / 2;
const imageHeight = 300;
const imageWidth = imageHeight * aspectRatio;

export default function Project(props: ProjectInfo) {
  return (
    <div
      className={props.pictureLeft ? styles.projectLeft : styles.projectRight}
    >
      <Image
        className={styles.image}
        src={props.imageSrc}
        alt={props.title}
        height={imageHeight}
        width={imageWidth}
      />
      <div className={styles.text}>
        <div className={styles.title}>{props.title}</div>
        <p>{props.metadata}</p>
        <p>{props.body}</p>
        <div className={styles.buttonRow}>
          {Object.entries(props.buttons).map(([text, href]) => (
            <Link
              className={styles.button}
              href={href}
              target={text === "Learn More" ? undefined : "_blank"}
              rel={text === "Learn More" ? undefined : "noopener noreferrer"}
            >
              {`${text} ➜`}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

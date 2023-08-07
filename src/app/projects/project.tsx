import Image from "next/image";
import Link from "next/link";

import styles from "./projects.module.css";

const aspectRatio = 3 / 2;
const imageHeight = 300;
const imageWidth = imageHeight * aspectRatio;

export default function Project(props: {
  imageSrc: string;
  title: string;
  metadata: string;
  body: string;
  buttons: { [key: string]: string };
}) {
  return (
    <div className={styles.project}>
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

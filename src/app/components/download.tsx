"use client";

import styles from "../styles/projects.module.css";

/**
 * Renders the download button.
 *
 * @param text The text to display on the button.
 * @returns The download button.
 */
export default function Download(props: { text: string }) {
  const handleDownload = () => {
    const pdfUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Brian_Zheng_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.button} onClick={handleDownload}>
      {props.text}
    </div>
  );
}

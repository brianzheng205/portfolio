"use client";

import utilStyles from "../utils.module.css";

import data from "./data";

import ImageTextRow from "../components/imageTextRow";

export default function Experiences() {
  return (
    <div className={utilStyles.column}>
      <div className={utilStyles.projectGroup}>
        <h1>Experiences</h1>
        {data.map((experience) => (
          <ImageTextRow {...experience} key={experience.title} />
        ))}
      </div>
    </div>
  );
}

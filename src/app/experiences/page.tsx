"use client";

import ImageTextRow from "../components/ImageTextRow";

import utilStyles from "../utils.module.css";

import data from "./data";

export default function Experiences() {
  return (
    <div className={utilStyles.column}>
      <h1>Experiences</h1>
      {data.map((experience) => (
        <ImageTextRow {...experience} key={experience.title} />
      ))}
    </div>
  );
}

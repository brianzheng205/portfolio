import {
  description as bounceDescription,
  links as bounceLinks,
  majorSkills as bounceMajorSkills,
} from "./bounce/data";

import { ImageTextRowInfo } from "../types";

export const feauturedProjects: ImageTextRowInfo[] = [
  {
    imageSrc: "/bounce/recipes.png",
    title: "Bounce (by Emily Liew)",
    metadata: "June 2023 — September 2023",
    body: {
      Overview: bounceDescription,
      "Major Resources": bounceMajorSkills,
      Journey: `
        I implemented many features and styled the web app to fit the needs of college students
        using React, TypeScript, and CSS.
      `,
      Results: `
        Bounce has been successfully implemented and styled to fit the needs of college students.
      `,
    },
    links: {
      ...bounceLinks,
      "Learn More": "/projects/bounce",
    },
    pictureFirst: false,
  },
];

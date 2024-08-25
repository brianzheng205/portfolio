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
      "Mission Purpose": `
        College students have a lot of their plates and need a way to manage their tasks and
        meal preps.
      `,
      Resources: bounceMajorSkills,
      Journey: `
        I implemented many features and styled the web app to fit the needs of college students
        using React, Redux, TypeScript, and CSS.
      `,
      Results: bounceDescription,
    },
    links: {
      ...bounceLinks,
      "Learn More": "/projects/bounce",
    },
    pictureFirst: false,
  },
];

import { projectInfo as compilerInfo } from "./compiler/data";
import { projectInfo as pokerbotsInfo } from "./pokerbots/data";
import { projectInfo as bounceInfo } from "./bounce/data";

import { ImageTextRowInfo } from "../types";

export const feauturedProjects: ImageTextRowInfo[] = [
  {
    imageSrc: "/projects/compiler/code.jpg",
    title: compilerInfo.title,
    metadata: "February 2024 - May 2024",
    body: {
      Overview: compilerInfo.description,
      "Major Resources": compilerInfo.skills,
      Journey: `
        We learned the different steps of how compilers work, including parsing, semantic analysis, and code generation.
      `,
      Results: `
        We created a fully functional compiler to translate a subset of the Decaf programming language with several optimizations.
      `,
    },
    links: {
      ...compilerInfo.links,
      "Learn More": "/projects/compiler",
    },
    pictureFirst: false,
  },
  {
    imageSrc: "/projects/pokerbots/poker.webp",
    title: "Pokerbots",
    metadata: "January 2024",
    body: {
      Overview: pokerbotsInfo.description,
      "Major Resources": pokerbotsInfo.skills,
      Journey: `
        I tested many different strategies to find the best strategy to play against other bots.
      `,
      Results: `
        My Pokerbot won 75% of its matches in the last tournament.
      `,
    },
    links: {
      ...pokerbotsInfo.links,
      "Learn More": "/projects/pokerbots",
    },
    pictureFirst: true,
  },
  {
    imageSrc: "/bounce/recipes.png",
    title: "Bounce (by Emily Liew)",
    metadata: "June 2023 — September 2023",
    body: {
      Overview: bounceInfo.description,
      "Major Resources": bounceInfo.skills,
      Journey: `
        I implemented many features and styled the web app to fit the needs of college students
        using React, TypeScript, and CSS.
      `,
      Results: `
        Bounce has been successfully implemented and styled to fit the needs of college students.
      `,
    },
    links: {
      ...bounceInfo.links,
      "Learn More": "/projects/bounce",
    },
    pictureFirst: false,
  },
];

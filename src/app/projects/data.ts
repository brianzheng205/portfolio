import { projectInfo as pumpUpInfo } from "./pumpUp/data";
import { projectInfo as quantumInfo } from "./quantumEntanglment/data";
import { projectInfo as compilerInfo } from "./compiler/data";
import { projectInfo as pokerbotsInfo } from "./pokerbots/data";
import { projectInfo as bounceInfo } from "./bounce/data";

import { ImageTextRowInfo } from "../types";

export const feauturedProjects: ImageTextRowInfo[] = [
  {
    imageSrc: "/projects/pumpUp/home.png",
    title: pumpUpInfo.title,
    metadata: "September 2024 - October 2024",
    body: {
      Overview: pumpUpInfo.description,
      "Major Resources": pumpUpInfo.skills,
      Journey: `
        I learned how to use Vue.js and Express.js through tutorials, lectures, and hands-on experience.
        I designed the app based on user interviews and feedback.
      `,
      Results: `
        PumpUp has been successfully implemented for gym-goers of all levels.
      `,
    },
    links: {
      ...pumpUpInfo.links,
      "Learn More": "/projects/pumpUp",
    },
    pictureFirst: false,
  },
  {
    imageSrc: "/projects/quantumEntanglement/start.png",
    title: quantumInfo.title,
    metadata: "September 2024 - October 2024",
    body: {
      Overview: quantumInfo.description,
      "Major Resources": quantumInfo.skills,
      Journey: `
        I followed online resources to learn how to use Unity and C# to create a 2D game.
      `,
      Results: `
        I created a 2D puzzle game based on asymmetric information between players. 
        I gained experience in Unity, C#, and the game development cycle.
      `,
    },
    links: {
      ...quantumInfo.links,
      "Learn More": "/projects/quantumEntanglment",
    },
    pictureFirst: true,
  },
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
    title: pokerbotsInfo.title,
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
    imageSrc: "/projects/bounce/recipes.png",
    title: bounceInfo.title,
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

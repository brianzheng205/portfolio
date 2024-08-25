import { ImageTextRowInfo } from "../types";
import {
  description as CAVEDescription,
  majorSkills as CAVEMajorSkills,
} from "./CAVE/data";
import {
  description as CSAILDescription,
  majorSkills as CSAILMajorSkills,
  ideaNavigatorLinks,
} from "./CSAIL/data";

export const data: ImageTextRowInfo[] = [
  {
    imageSrc: "/experiences/CAVE/profile.png",
    title: "MIT CAVE Lab",
    metadata: "May 2024 — Present",
    body: {
      Overview:
        CAVEDescription +
        `
        The web app is constantly updated and requires new features and bug fixes.
      `,
      "Major Resources": CAVEMajorSkills,
      Journey: `
        I implemented many features and fixed many bugs in React applications. I learned a lot
        about the tech stack and gained experience in React libraries such as Three.js and map-react-gl.
      `,
      Results: `
        MIT CAVE Lab's applications have improved and have new features to better fit the needs of users.
        For example, one of their web apps is now equipped with an resizable and draggable on-screen keyboard
        so that users can input text and numbers with ease, especially those with touch screen monitors or
        those without access to a physical keyboard.
      `,
    },
    links: {
      Lab: "https://cave.mit.edu/",
      "Learn More": "/experiences/CAVE",
    },
  },
  {
    imageSrc: "/experiences/CSAIL/profile.png",
    title: "MIT Computer Science & Artificial Intelligence Laboratory (CSAIL)",
    metadata: "May 2023 — September 2023",
    body: {
      Overview: CSAILDescription,
      "Major Resources": CSAILMajorSkills,
      Journey: `
        I worked in Professor Kellis's team to write Python scripts to automate and optimize
        XML data processing and label generation and to develop a web app to visualize
        complex datasets.
      `,
      Results: `
        Professor Kellis's application has been largely implemented in terms of UI/UX design
        with a few example datasets that can now be automatically updated with ease.
      `,
    },
    links: {
      ...ideaNavigatorLinks,
      "Learn More": "/experiences/CSAIL",
    },
    pictureFirst: false,
  },
];

export default data;

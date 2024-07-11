import { allProjects, skillToProjects } from "../data";
import { ideaNavigatorLinks } from "./ideaNavigator/data";
import { bounceLinks } from "./bounce/data";

import { ImageTextRowInfo } from "../types";

export const allProjectsSkills = Object.keys(skillToProjects).filter(
  (key) => skillToProjects[key] === allProjects
);

export const feauturedProjects: ImageTextRowInfo[] = [
  {
    imageSrc: "/ideaNavigator/papersNavigator.png",
    title: "Idea Navigator",
    metadata: "May 2023 — September 2023",
    body: {
      "Mission Purpose": `
        Many users can benefit from an AI-powered tool to help organize, navigate, and cluster
        their data.
      `,
      Resources: [
        "Python",
        "React",
        "Redux",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "VSCode",
        "ThreeJS",
      ],
      Journey: `
        I worked in Professor Kellis's team to write Python scripts to automate and optimize
        XML data processing and label generation and to develop a web app to visualize
        complex datasets.
      `,
      Results: `
        Idea Navigator has been largely implemented in terms of UI/UX design
        with a few example datasets that can now be automatically updated with ease.
      `,
    },
    links: {
      ...ideaNavigatorLinks,
      "Learn More": "/projects/ideaNavigator",
    },
  },
  {
    imageSrc: "/bounce/recipes.png",
    title: "Bounce (by Emily Liew)",
    metadata: "June 2023 — September 2023",
    body: {
      "Mission Purpose": `
        College students have a lot of their plates and need a way to manage their tasks and
        meal preps.
      `,
      Resources: [
        "React",
        "Redux",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "VSCode",
      ],
      Journey: `
        I implemented many features and styled the web app to fit the needs of college students
        using React, Redux, TypeScript, and CSS.
      `,
      Results: `
        Bounce is a full-stack web app, powered by React, TypeScript, and AWS, offering users 
        an efficient platform to track recipes and manage to-do tasks. With a Recipe Dashboard 
        enabling recipe management and real-time sorting based on available ingredients, and 
        automatic task prioritization based on deadlines and duration, Bounce ensures seamless 
        organization and productivity. Data persistence is achieved through back-end database 
        connectivity, enhancing user experience and convenience.
      `,
    },
    links: {
      ...bounceLinks,
      "Learn More": "/projects/bounce",
    },
    pictureFirst: false,
  },
];

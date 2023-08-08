import { allProjects, skillToProjects } from "./aboutMe";
import { ideaNavigatorLinks } from "./ideaNavigator";
import { bounceLinks } from "./bounce";
import { ImageTextRowInfo } from "../types";

export const allProjectsSkills = Object.keys(skillToProjects).filter(
  (key) => skillToProjects[key] === allProjects
);

export const feauturedProjects: ImageTextRowInfo[] = [
  {
    imageSrc: "/ideaNavigator/papersNavigator.png",
    title: "Idea Navigator",
    metadata: "May 2023 — Present",
    body: `
      Idea Navigator is a full-stack web app powered by React, TypeScript, and AWS. 
      It is used to cluster unorganized data based on similarity to display onto a 2D field for 
      easy navigation with many AI-powered tools. It currently displays research papers, 
      meetings, and Lex Fridman podcasts related to the Computational Biology Lab @ MIT.
    `,
    links: {
      ...{
        "Learn More": "/projects/ideaNavigator",
      },
      ...ideaNavigatorLinks,
    },
  },
  {
    imageSrc: "/bounce/recipes.png",
    title: "Bounce (Led by Emily Liew)",
    metadata: "June 2023 — Present",
    body: `
      Bounce is a full-stack web app, powered by React, TypeScript, and AWS, offering users 
      an efficient platform to track recipes and manage to-do tasks. With a Recipe Dashboard 
      enabling recipe management and real-time sorting based on available ingredients, and 
      automatic task prioritization based on deadlines and duration, Bounce ensures seamless 
      organization and productivity. Data persistence is achieved through back-end database 
      connectivity, enhancing user experience and convenience.
    `,
    links: {
      ...{
        "Learn More": "/projects/bounce",
      },
      ...bounceLinks,
    },
    pictureLeft: false,
  },
];

import { ImageTextRowInfo } from "../types";

export const data: ImageTextRowInfo[] = [
  {
    imageSrc: "/experiences/CAVE/profile.png",
    title: "MIT CAVE Lab",
    metadata: "May 2024 — Present",
    body: `
     I am currently helping to develop CAVE LAB's web app to help researchers easily
     make interactive websites by simply using Python and the API. I improved
     website accessibility by implementing an on-screen keyboard to use for inputs.
    `,
    links: {
      Lab: "https://cave.mit.edu/",
      "Learn More": "/experiences/CAVE",
    },
  },
  {
    imageSrc: "/experiences/CSAIL/profile.png",
    title: "MIT Computer Science & Artificial Intelligence Laboratory (CSAIL)",
    metadata: "May 2023 — September 2023",
    body: `
      I worked in Professor Kellis's team to write scripts to automate and optimize
      XML data processing and label generation and to develop a web app to visualize
      complex datasets.
    `,
    links: {
      Lab: "https://compbio.mit.edu/",
      "Learn More": "/projects/ideaNavigator",
    },
    pictureFirst: false,
  },
];

export default data;

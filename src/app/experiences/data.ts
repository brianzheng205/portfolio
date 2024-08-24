import { ImageTextRowInfo } from "../types";

export const data: ImageTextRowInfo[] = [
  {
    imageSrc: "/experiences/CAVE/profile.png",
    title: "MIT CAVE Lab",
    metadata: "May 2024 — Present",
    body: {
      "Organization Overview": `
        Many users including researchers and private companies use CAVE Lab's products for
        data analysis and visualization. These products are constantly being updated and
        require new features and bug fixes.
      `,
      "Major Resources": [
        "React",
        "Redux",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
        "VSCode",
      ],
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
      "Organization Overview": `
        As AI becomes prevalent in software applications, MIT Professor Kellis has a vision to
        develop a web application to help users organize, visualize, and access their data
        with the power of AI.
      `,
      "Major Resources": [
        "Python",
        "Next.js",
        "React",
        "Redux",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "VSCode",
      ],
      Journey: `
        I worked in Professor Kellis's team to write Python scripts to automate and optimize
        XML data processing and label generation and to develop a web app to visualize
        complex datasets.
      `,
      Results: `Mus
        Professor Kellis's application has been largely implemented in terms of UI/UX design
        with a few example datasets that can now be automatically updated with ease.
      `,
    },
    links: {
      Lab: "https://compbio.mit.edu/",
      "Learn More": "/projects/ideaNavigator",
    },
    pictureFirst: false,
  },
];

export default data;

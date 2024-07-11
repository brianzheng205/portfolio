import { ProjectInfo } from "@/app/types";

const skills = ["React", "Redux", "JavaScript", "HTML", "CSS", "Git", "VSCode"];

const data: ProjectInfo = {
  title: "MIT CAVE Lab",
  disclaimer: "",
  links: {},
  description: [],
  contributions: [
    {
      imageSrc: "/experiences/CAVE/keyboard.png",
      title: "Implement On-Screen Keyboard",
      body: {
        "Mission Purpose": `
          Many users cannot easily use the web app's text/number inputs, such as those with
          touch screen monitors or those who do not have access to a physical keyboard.
        `,
        Resources: [
          "React",
          "Redux",
          "JavaScript",
          "HTML",
          "CSS",
          "Git",
          "VSCode",
          "React Simple Keyboard",
        ],
        Journey: `
          I researched simple on-screen keyboard JavaScript libraries and landed on React Simple Keyboard. I
          used the library as a base and customized it with custom styling and functionality to fit
          the web app's needs.
        `,
        Results: `
          The on-screen keyboard is now a part of the web app and users have access to a full keyboard
          as well as a number pad for inputting text and numbers. The keyboard is resizable and draggable
          to fit the user's needs.
        `,
      },
    },
  ],
  skills: skills,
  imagesInfo: [
    {
      src: "",
      caption: "",
    },
  ],
};

export default data;

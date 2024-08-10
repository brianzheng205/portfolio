import { ProjectInfo } from "@/app/types";

const skills = ["React", "Redux", "JavaScript", "HTML", "CSS", "Git", "VSCode"];

const data: ProjectInfo = {
  title: "MIT CAVE Lab",
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
    {
      imageSrc: "/experiences/CAVE/map.png",
      title: "Activate Height On Maps",
      body: {
        "Mission Purpose": `
          Many users need to display the height of their map features and would also benefit from the ability
          to compare measurements of their map features with height.
        `,
        Resources: [
          "React",
          "Redux",
          "JavaScript",
          "HTML",
          "CSS",
          "Git",
          "VSCode",
          "Mapbox",
          "Three.js",
        ],
        Journey: `
          I researched Mapbox's documentation to find a way to create custom layers on the map. I then
          used Three.js to create 3D objects on the map and linked them to the map features to display
          their height.
        `,
        Results: `
          The map now has the ability to display the height of map features and users can compare the
          height of different features. The range of the height of the map features ican be set in the map's
          legend.
        `,
      },
      pictureFirst: false,
    },
  ],
  skills: skills,
  imagesInfo: [],
};

export default data;

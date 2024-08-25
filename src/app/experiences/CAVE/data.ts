import { ProjectInfo } from "@/app/types";

export const description = `
  The CAVE Lab maintains a web app that allows users with minimal coding
  experience to create data-visualization web apps with a simple Python
  API.
`;

export const majorSkills = [
  "React",
  "Redux",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
];

const data: ProjectInfo = {
  title: "MIT CAVE Lab",
  links: {},
  description: description,
  skills: majorSkills,
  contributions: [
    {
      imageSrc: "/experiences/CAVE/keyboard.png",
      title: "Implement On-Screen Keyboard",
      body: {
        "Mission Purpose": `
          Many users cannot easily use the web app's text/number inputs, such as those with
          touch screen monitors or those who do not have access to a physical keyboard.
        `,
        Resources: ["React Simple Keyboard", ...majorSkills],
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
        Resources: ["Mapbox", "Three.js", ...majorSkills],
        Journey: `
          I researched Mapbox's documentation to find a way to create custom layers on the map. I then
          used Three.js to create 3D objects on the map and linked them to the map features to display
          their height.
        `,
        Results: `
          The map can now display the height of map features and users can compare the
          height of different features. The range of the height of the map features can be set in the map's
          legend.
        `,
      },
      pictureFirst: false,
    },
    {
      imageSrc: "/experiences/CAVE/fast.webp",
      title: "Optimize Number Inputs",
      body: {
        "Mission Purpose": `
          Updating the number input requires the session to send the update and receive the new value
          from the server, which can take a few seconds. Many users' experiences would be improved if
          they could update the number input faster on their session.
        `,
        Resources: majorSkills,
        Journey: `
          I dug into the number input implementation to find out why the update took so long and found
          that it was waiting for the server to respond, even if it is the session that sent the update.
          I changed the behavior of the number input so that the session that updates the number input
          updates their value first before sending it to the server.
        `,
        Results: `
          The number input is now fast and responsive for the user of the session that updates the number input.
        `,
      },
    },
  ],
  imagesInfo: [],
};

export default data;

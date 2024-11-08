import { ProjectInfo } from "../../types";

const description = `
  In my Creating Video Games class, my project team created a multiplayer co-op
  puzzle-solving game where each player has different information and needs to
  work together to solve puzzles and escape the room.
`;

const links = {};

const majorSkills = ["Unity", "C#", "Git"];

export const projectInfo: ProjectInfo = {
  title: "Quantum Entanglement",
  links,
  description,
  skills: majorSkills,
  contributions: [
    {
      imageSrc: "/projects/quantumEntanglement/scale.png",
      title: "Scale Puzzle",
      body: {
        "Mission Purpose": `
          The game requires a lot of different puzzles to be solved.
        `,
        Resources: majorSkills,
        Journey: `
          I looked into sprite rotations and on click handlers to implement
          placing blocks onto the scales and rotate the balance scale to 
          simulate gravity and balance.
        `,
        Results: `
          I created a fully-functional scale puzzle that gives players clear
          feedback on their actions.
        `,
      },
      pictureFirst: false,
    },
    {
      imageSrc: "/projects/quantumEntanglement/room.png",
      title: "Navigation",
      body: {
        "Mission Purpose": `
          Players need ways to navigate around the room and the puzzles.
        `,
        Resources: majorSkills,
        Journey: `
          I tested a few different views of the puzzles and the room to
          find the views that would give the players the best experience.
        `,
        Results: `
          Players can now navigate into the scale puzzle by clicking on 
          the table to zoom in on the scale pieces.
        `,
      },
      pictureFirst: true,
    },
  ],
  imagesInfo: [],
};

export default projectInfo;

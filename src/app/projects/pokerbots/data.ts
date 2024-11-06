import { ProjectInfo } from "../../types";

const description = `
  Pokerbots is an MIT class about programming a bot to play Poker against other bots.
`;

const links = {
  GitHub: "https://github.com/brianzheng205/Pokerbots-2024",
};

const majorSkills = ["Python", "Git"];

export const projectInfo: ProjectInfo = {
  title: "Pokerbots",
  links,
  description,
  skills: majorSkills,
  contributions: [
    {
      imageSrc: "/projects/pokerbots/upgrade.jpg",
      title: "Upgrading",
      body: {
        "Mission Purpose": `
          My bot week after week needs to improve and beat previous versions.
        `,
        Resources: majorSkills,
        Journey: `
          I played my newest version against all other previous versions, finding
          ways that my newest version could improve.
        `,
        Results: `
          My bots improved, week after week, climbing the ranks of the leaderboard
          at each tournament.
        `,
      },
      pictureFirst: false,
    },
    {
      imageSrc: "/projects/pokerbots/win.png",
      title: "Testing Strategies",
      body: {
        "Mission Purpose": `
          Other bots employ many different strategies that need to be accounted for.
        `,
        Resources: majorSkills,
        Journey: `
          I looked into the strategies of other bots, seeing how they play in different
          scenarios. I tested strategies to take advantage of theirs to find the ones
          that gave the best results.
        `,
        Results: `
          My bot had a 75% win rate in the last tournament.
        `,
      },
      pictureFirst: true,
    },
  ],
  imagesInfo: [],
};

export default projectInfo;

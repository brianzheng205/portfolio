import { skillToProjects, allProjects, ideaNavigator } from "../../data";

import { ProjectInfo } from "../../types";

export const ideaNavigatorLinks = {
  Lab: "http://compbio.mit.edu/",
};

const projectInfo: ProjectInfo = {
  title: "Idea Navigator (by CSAIL)",
  links: ideaNavigatorLinks,
  description: [],
  contributions: [
    {
      imageSrc: "/ideaNavigator/filter.png",
      title: "Optimize Data Parsing",
      body: {
        "Mission Purpose": `
          Our web team initially parsed over 200 GB of research paper data to extract
          relevant data for our dataset. We then decided we wanted the
          paper publication dates, requiring another parse through all 200 GB which takes
          several hours. We want to extract new data more efficiently.
        `,
        Resources: ["Python", "VSCode", "Git", "XML"],
        Journey: `
          The existing parser only extracted specific details from a subset of papers 
          (around 43,000 out of millions). This required us to parse all 200 GB of research
          papers each time we needed new data. To solve this, I extracted all the raw XML 
          data (which included information we did not need at the time) from each of the 43,000 papers
          and condensed the data to a 1 GB file. I developed a new parser using Python
          to process this data.
        `,
        Results: `
          The parser's workload decreased from over 200 GB of data to only around
          1 GB, which cut runtime from a few hours hours to under a minute, enabling
          efficient extraction of new data by our web team.
        `,
      },
    },
    {
      imageSrc: "/ideaNavigator/chatGPT.png",
      title: "Generate Labels using ChatGPT",
      body: {
        "Mission Purpose": `
          Idea Navigator does not have an automatic AI-powered way to label the data clusters yet
          so we need to generate labels for the data clusters in our example datasets.
        `,
        Resources: ["Python", "JSON"],
        Journey: `
          Using the OpenAI API, I efficiently generated labels for 
          the inital papers and meetings data clusters through thousands of asynchronous 
          requests made in optimally-sized batches. To ensure progress retention and 
          judicious resource use, I preserved each batch's results before initiating 
          the next batch, safeguarding against potential 
          issues on the OpenAI servers. Subsequently, I enhanced frontend performance by 
          calculating and caching cluster centers, sparing the frontend from iterating
          through several MBs of data to calculate the centers every time the page loads.
        `,
        Results: `
          Our example datasets now have labels generated by ChatGPT and the frontend
          was optimized to improve performance.
        `,
      },
    },
    {
      imageSrc: "/UI.png",
      title: "Implement Idea Navigator's Frontend",
      body: {
        "Mission Purpose": `
          Idea Navigator needs to be implemented with relevant features and
          a user-friendly interface to facilitate data exploration and analysis.
        `,
        Resources: [
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
          I implemented a series of enhancements aimed at optimizing user experience. 
          I introduced a loading screen to provide users with a responsive perception 
          during page redirections, ensuring a seamless transition. I implemented line 
          drawing functionality, enabling users to effortlessly trace citations and 
          references of the currently selected papers, enriching the exploration process. 
          I also drew lines to convey semantic information of the papers and meetings 
          data points. Additionally, I introduced year-based filtering, empowering 
          users to distill data visualization for improved clarity and insights.
        `,
        Results: `
          Idea Navigator is much closer to being finished and user experience has been
          improved significantly.
        `,
      },
      pictureFirst: false,
    },
  ],
  skills: Object.keys(skillToProjects).filter(
    (skill) =>
      skillToProjects[skill] === allProjects ||
      skillToProjects[skill] === ideaNavigator
  ),
  imagesInfo: [
    {
      src: "/ideaNavigator/loading.png",
      caption: "Loading Screen",
    },
    {
      src: "/ideaNavigator/citationLines.png",
      caption: "Citation Lines",
    },
    {
      src: "/ideaNavigator/filterByYear.png",
      caption: "Filter By Year",
    },
  ],
};

export default projectInfo;
import { skillToProjects, allProjects, ideaNavigator } from "./aboutMe";

import { ProjectInfo } from "../types";

export const ideaNavigatorLinks = {
  Website: "http://seascapes.ai/",
  Lab: "http://compbio.mit.edu/",
};

const projectInfo: ProjectInfo = {
  title: "Idea Navigator",
  disclaimer: `
    The project is still in development, so the website may not be running.
    The information below is a description of the project as of August 7, 2023.
  `,
  links: ideaNavigatorLinks,
  description: [
    {
      imageSrc: "/ideaNavigator/homePage.png",
      title: "Home Page",
      body: `
        The homepage provides users with an overview of their Navigators, each representing 
        a curated set of related data points. Currently, Idea Navigator features distinct 
        Navigators for papers, meetings, and Lex Fridman podcasts, all centered around MIT's 
        Computational Biology Lab and MIT Professor Manolis Kellis who is head of the 
        Computational Biology Group. While Idea Navigator is undergoing development, 
        it aims to empower users to establish their custom Navigators using personalized data. 
        Explore the "Future Vision" section for more details.
      `,
    },
    {
      imageSrc: "/ideaNavigator/papersNavigator.png",
      title: "Navigators",
      body: `
        Each Navigator serves as a data hub centered around MIT Professor Manolis Kellis' work. 
        Data points are embedded based on their titles and summaries onto a 2D space where proximity 
        indicates similarity. Clicking a data point reveals its details, and users navigate by 
        dragging. Selection tools atop the side panel facilitate multi-paper selection. Many Quick Actions,
        powered by ChatGPT, are under development but "Generate Summary" currently provides a summary
        of the selected data points.  Navigators differ—Papers Navigator offers directed arrows 
        to explore references and citations. Other unique features are in the development.
      `,
      pictureFirst: false,
    },
    {
      imageSrc: "/ideaNavigator/connected.png",
      title: "Future Vision",
      body: `
        Idea Navigator aims to revolutionize data management, enabling seamless visualization and 
        navigation through unstructured information. Through user-friendly data uploads, the platform 
        aims to automatically embed, cluster, and label data, crafting personalized Navigators. 
        This empowers users with effortless exploration and valuable insights. ChatGPT-powered 
        Quick Actions and a ChatGPT-powered search bar enrich the experience, facilitating 
        intuitive data exploration and idea generation. Tailored for a diverse audience, 
        Idea Navigator caters to everyone including students organizing notes, researchers 
        exploring datasets, and companies visualizing employee efforts.
      `,
    },
  ],
  contributions: [
    {
      imageSrc: "/ideaNavigator/filter.png",
      title: "Backend Optimization",
      body: `
        Our web team initially parsed over 200 GB of Pubmed research paper data for 
        basic information in our dataset. We then needed publication dates, leading 
        to another database run. I improved the backend parser to optimize future runs. 
        The existing parser only extracted specific details from a subset of papers 
        (around 43,000 out of millions). This required us to parse the entire 200+ GB 
        database each time we needed new data. To solve this, I extracted all the raw XML 
        data from every paper, condensing it to a 1 GB file. I developed a new parser using Python
        to process this data, significantly reducing the workload from over 200 GB to
        1 GB. This improvement cut the parser's runtime from a few hours hours to under
        a minute, enabling efficient extraction of new data by our web team.
      `,
    },
    {
      imageSrc: "/ideaNavigator/rocketShip.png",
      title: "Frontend Optimization",
      body: `
        Initially, the frontend loaded the entire database (around 100 MB of data) from AWS S3, 
        forcing users to wait a few seconds before seeing the Navigator. Instead of burdening 
        the web app with the weight of importing the data directly, I leveraged Prisma's 
        capabilities to query specific information from our new database in MongoDB. This 
        approach not only trimmed down the amount of data the frontend had to handle but 
        also led to faster loading times and an improved user experience. By fetching 
        only the necessary parts of the data each time with Prisma, I ensured that the 
        web app efficiently utilized resources and delivered a responsive interface 
        without unnecessary data overhead.
      `,
      pictureFirst: false,
    },
    {
      imageSrc: "/ideaNavigator/chatGPT.png",
      title: "Using GPT-3.5 to Generate Labels",
      body: `
        Utilizing chat-gpt-3.5 through the OpenAI API, I efficiently generated labels for 
        the inital papers and meetings data clusters through thousands of asynchronous 
        requests made in optimally-sized batches. To ensure progress retention and 
        judicious resource use, I preserved each  batch's results before initiating 
        the next batch, safeguarding against potential 
        issues on the OpenAI servers. Subsequently, I enhanced frontend performance by 
        calculating and caching cluster centers on the backend, improving frontend loading 
        times and sparing the frontend from iterating through several MBs of data to 
        calculate the centers every time the page loads.
      `,
    },
    {
      imageSrc: "/UI.png",
      title: "Improving User Experience",
      body: `
        I implemented a series of enhancements aimed at optimizing user experience. 
        I introduced a loading screen to provide users with a responsive perception 
        during page redirections, ensuring a seamless transition. I implemented line 
        drawing functionality, enabling users to effortlessly trace citations and 
        references of the currently selected papers, enriching the exploration process. 
        I also drew lines to convey semantic information of the papers and meetings 
        data points. Additionally, I introduced year-based filtering, empowering 
        users to distill data visualization for improved clarity and insights. 
        These cumulative efforts collectively amplified user engagement and 
        facilitated more effective data exploration.
      `,
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

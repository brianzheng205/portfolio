import { skillToProjects, allProjects, bounce } from "./aboutMe";
import { ProjectInfo } from "../types";

const projectInfo: ProjectInfo = {
  title: "Bounce",
  disclaimer: `
    The project is still in development.
    The information below is a description of the project as of August 7, 2023.
  `,
  websiteLink: "https://main.d2ngor7ea7fphp.amplifyapp.com/",
  description: [],
  contributions: [
    {
      imageSrc: "/bounce/updates.png",
      title: "Updates Log Page",
      body: `
        I utilized the GitHub API to extract the project's commit history to create 
        the Updates Log page. This page effectively presents commit messages, sorted 
        chronologically from the latest to the oldest. Notably, the Updates Log 
        serves as a visual representation of the app's developmental strides for 
        the developers, Emily Liew and myself. Importantly, access to this log 
        requires password authentication, ensuring the confidentiality of Bounce's 
        implementation at the time of its universal launch. Additionally, for user 
        convenience, I designed a persistent text area at the bottom of the screen 
        to display the app's version date and provide a link to the project's repository. 
        Upon Bounce's full launch, the link will be removed. For now, the our work can 
        be viewed here.
      `,
    },
    {
      imageSrc: "/bounce/transition.gif",
      title: "Seamless Navigation",
      body: `
        I implemented an icon bar on the web app, offering users a convenient means 
        of accessing various sections of Bounce. Each icon corresponds to a specific 
        page: the To-Do List, Recipes and Ingredients management, the developer-exclusive 
        Updates Log, and the login page. Upon clicking an icon, users are seamlessly 
        redirected to the associated page. Additionally, I integrated a loading 
        screen that is displayed during the initial page load, ensuring a smooth 
        and dynamic transition for users as they explore different sections of the app.
      `,
      pictureLeft: false,
    },
    {
      imageSrc: "/UI.png",
      title: "Improving User Experience",
      body: `
        I leveraged CSS to create animated collapsible text boxes, ensuring a 
        seamless transition when users expand or collapse them. Additionally, 
        I curated an appealing color theme and selected text fonts and sizes 
        to optimize user experience.
      `,
    },
  ],
  skills: Object.keys(skillToProjects).filter(
    (skill) =>
      skillToProjects[skill] === allProjects ||
      skillToProjects[skill] === bounce
  ),
  imagesInfo: [
    {
      src: "/bounce/tasks.png",
      caption: "To-Do List Page",
    },
    {
      src: "/bounce/recipes.png",
      caption: "Recipes Page",
    },
  ],
};

export default projectInfo;

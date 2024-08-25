import { ProjectInfo } from "../../types";

export const description = `
  Bounce is a full-stack web app, powered by React, TypeScript, and AWS, offering college 
  students an efficient platform to track recipes and manage to-do tasks. With a Recipe Dashboard 
  enabling recipe management and real-time sorting based on available ingredients, and 
  automatic task prioritization based on deadlines and duration, Bounce ensures seamless 
  organization and productivity. Data persistence is achieved through backend database 
  connectivity, enhancing user experience and convenience.
`;

export const links = {
  Website: "https://main.d2ngor7ea7fphp.amplifyapp.com/",
  GitHub: "https://github.com/emilyy-liew/bounce/tree/main",
  "Emily's Portfolio": "https://emily-liew-portfolio.vercel.app/",
};

export const majorSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "Git",
];

const projectInfo: ProjectInfo = {
  title: "Bounce (by Emily Liew)",
  links: links,
  description: description,
  skills: majorSkills,
  contributions: [
    {
      imageSrc: "/bounce/transition.gif",
      title: "Seamless Navigation",
      body: {
        "Mission Purpose": `
          Bounce has many features and UI elements that need to be implemented.
        `,
        Resources: majorSkills,
        Journey: `
          I implemented an icon bar on the web app, offering users a convenient means 
          of accessing various sections of Bounce. Each icon corresponds to a specific 
          page: the To-Do List, Recipes and Ingredients management, and the login page.
          Upon clicking an icon, users are seamlessly 
          redirected to the associated page. Additionally, I integrated a loading 
          screen that is displayed during the initial page load, ensuring a smooth 
          and dynamic transition for users as they explore different sections of the app.
        `,
        Results: `
          Bounce now has a seamless navigation experience, with users able to
          effortlessly access different sections of the app. The loading screen
          provides a responsive perception during page redirections, ensuring a
          seamless transition.
        `,
      },
      pictureFirst: false,
    },
    {
      imageSrc: "/UI.png",
      title: "Improving User Experience",
      body: {
        "Mission Purpose": `
          Our web team initially parsed over 200 GB of research paper data to extract
          relevant data for our dataset. We then decided we wanted the
          paper publication dates, requiring another parse through all 200 GB which takes
          several hours. We want to extract new data more efficiently.
        `,
        Resources: majorSkills,
        Journey: `
          I created animated collapsible text boxes, ensuring a 
          seamless transition when users expand or collapse them. Additionally, 
          I curated an appealing color theme and selected text fonts and sizes 
          to optimize user experience.
        `,
        Results: `
          Users now have an enhanced experience with animated collapsible text boxes
          and an optimized color theme, font, and text size selection.
        `,
      },
    },
  ],
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

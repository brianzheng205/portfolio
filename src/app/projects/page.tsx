import Project from "../components/project";

import Header from "../components/header";
import { ProjectInfo, Page } from "../types";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
      <div className={utilStyles.column}>
        <div className={styles.projectGroup}>
          <div className={utilStyles.heading}>Featured Projects</div>
          {feauturedProjects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

const feauturedProjects: ProjectInfo[] = [
  {
    imageSrc: "/papers_navigator_dark.png",
    title: "Idea Navigator",
    metadata: "May 2023 — Present",
    body: `
      Idea Navigator is a full-stack web app powered by React, TypeScript, and AWS. 
      It is used to cluster unorganized data based on similarity to display onto a 2D field for 
      easy navigation with many AI-powered tools. It currently displays research papers, 
      meetings, and Lex Fridman podcasts related to the Computational Biology Lab @ MIT.
    `,
    buttons: {
      "Learn More": "/projects/ideaNavigator",
      Lab: "http://compbio.mit.edu/",
      "View Project": "http://seascapes.ai/",
    },
    pictureLeft: true,
  },
  {
    imageSrc: "/bounceRecipes.png",
    title: "Bounce",
    metadata: "June 2023 — Present",
    body: `
      Bounce is a full-stack web app, powered by React, TypeScript, and AWS, offering users 
      an efficient platform to track recipes and manage to-do tasks. With a Recipe Dashboard 
      enabling recipe management and real-time sorting based on available ingredients, and 
      automatic task prioritization based on deadlines and duration, Bounce ensures seamless 
      organization and productivity. Data persistence is achieved through back-end database 
      connectivity, enhancing user experience and convenience.
    `,
    buttons: {
      "Learn More": "/projects/bounce",
      GitHub: "https://github.com/emilyy-liew/bounce/tree/main",
      "View Project": "https://main.d2ngor7ea7fphp.amplifyapp.com/",
    },
    pictureLeft: false,
  },
];

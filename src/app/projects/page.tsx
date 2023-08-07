import ImageTextRow from "../components/imageTextRow";
import Header from "../components/header";
import { ImageTextRowInfo, Page } from "../types";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
      <div className={utilStyles.column}>
        <div className={styles.projectGroup}>
          <div className={styles.heading}>Featured Projects</div>
          {feauturedProjects.map((project) => (
            <ImageTextRow {...project} key={project.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export const ideaNavigatorDescription = `
  Idea Navigator is a full-stack web app powered by React, TypeScript, and AWS. 
  It is used to cluster unorganized data based on similarity to display onto a 2D field for 
  easy navigation with many AI-powered tools. It currently displays research papers, 
  meetings, and Lex Fridman podcasts related to the Computational Biology Lab @ MIT.
`;

export const bounceDescription = `
  Bounce is a full-stack web app, powered by React, TypeScript, and AWS, offering users 
  an efficient platform to track recipes and manage to-do tasks. With a Recipe Dashboard 
  enabling recipe management and real-time sorting based on available ingredients, and 
  automatic task prioritization based on deadlines and duration, Bounce ensures seamless 
  organization and productivity. Data persistence is achieved through back-end database 
  connectivity, enhancing user experience and convenience.
`;

const feauturedProjects: ImageTextRowInfo[] = [
  {
    imageSrc: "/ideaNavigator/papersNavigator.png",
    title: "Idea Navigator",
    metadata: "May 2023 — Present",
    body: ideaNavigatorDescription,
    buttons: {
      "Learn More": "/projects/ideaNavigator",
      Lab: "http://compbio.mit.edu/",
      Website: "http://seascapes.ai/",
    },
  },
  {
    imageSrc: "/bounceRecipes.png",
    title: "Bounce (Led by Emily Liew)",
    metadata: "June 2023 — Present",
    body: bounceDescription,
    buttons: {
      "Learn More": "/projects/bounce",
      GitHub: "https://github.com/emilyy-liew/bounce/tree/main",
      Website: "https://main.d2ngor7ea7fphp.amplifyapp.com/",
      "Emily's Portfolio": "",
    },
    pictureLeft: false,
  },
];

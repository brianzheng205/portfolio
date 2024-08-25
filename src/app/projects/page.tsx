import ImageTextRow from "../components/ImageTextRow";

import { feauturedProjects } from "./data";

import utilStyles from "../utils.module.css";

export default function Projects() {
  return (
    <div className={utilStyles.column}>
      <div className={utilStyles.projectGroup}>
        <h1>Featured Projects</h1>

        {feauturedProjects.map((project) => (
          <ImageTextRow {...project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

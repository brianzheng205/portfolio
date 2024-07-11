import ImageTextRow from "../components/imageTextRow";
import Buttons from "../components/buttons";

import { allProjectsSkills, feauturedProjects } from "./data";

import utilStyles from "../utils.module.css";

export default function Projects() {
  return (
    <div className={utilStyles.column}>
      <div className={utilStyles.projectGroup}>
        <h1>Featured Projects</h1>

        <Buttons
          buttons={allProjectsSkills.map((skill) => ({ label: skill }))}
        />

        {feauturedProjects.map((project) => (
          <ImageTextRow {...project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

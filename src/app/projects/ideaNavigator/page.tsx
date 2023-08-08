import Header from "../../components/header";
import ProjectPageLayout from "../../components/projectPageLayout";
import projectInfo from "../../data/ideaNavigator";
import { Page } from "../../types";

export default function IdeaNavigator() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
      <ProjectPageLayout {...projectInfo} />
    </>
  );
}

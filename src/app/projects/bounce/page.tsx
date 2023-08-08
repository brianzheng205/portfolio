import Header from "../../components/header";
import ProjectPageLayout from "../../components/projectPageLayout";
import projectInfo from "../../data/bounce";
import { Page } from "../../types";

export default function Bounce() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
      <ProjectPageLayout {...projectInfo} />
    </>
  );
}

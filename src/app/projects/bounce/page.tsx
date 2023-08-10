import Header from "@/app/components/header";
import ProjectPageLayout from "@/app/components/projectPageLayout";

import projectInfo from "@/app/data/bounce";

import { Page } from "@/app/types";

export default function Bounce() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
      <ProjectPageLayout {...projectInfo} />
      ``
    </>
  );
}

import Header from "@/app/components/header";
import ProjectPageLayout from "@/app/components/projectPageLayout";

import projectInfo from "@/app/data/ideaNavigator";

import { Page } from "@/app/types";

export default function IdeaNavigator() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
      <ProjectPageLayout {...projectInfo} />
    </>
  );
}

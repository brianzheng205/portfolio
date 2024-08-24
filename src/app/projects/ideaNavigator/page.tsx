import ProjectPageLayout from "@/app/components/ProjectPageLayout";

import projectInfo from "./data";

export default function IdeaNavigator() {
  return <ProjectPageLayout {...projectInfo} />;
}

import ProjectPageLayout from "@/app/components/projectPageLayout";

import projectInfo from "./data";

export default function IdeaNavigator() {
  return <ProjectPageLayout {...projectInfo} />;
}

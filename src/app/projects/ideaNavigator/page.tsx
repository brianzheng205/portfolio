import ProjectPageLayout from "@/app/components/projectPageLayout";

import projectInfo from "@/app/data/ideaNavigator";

export default function IdeaNavigator() {
  return <ProjectPageLayout {...projectInfo} />;
}

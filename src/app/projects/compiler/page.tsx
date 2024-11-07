import ProjectPageLayout from "@/app/components/ProjectPageLayout";

import projectInfo from "./data";

export default function Compiler() {
  return <ProjectPageLayout {...projectInfo} />;
}

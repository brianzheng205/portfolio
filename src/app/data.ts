export const categoryToSkills: { [key: string]: string[] } = {
  Languages: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "Java", "C"],
  Technologies: [
    "Next.js",
    "React",
    "Redux",
    "Node.js",
    "XML",
    "JSON",
    "Git",
    "VSCode",
    "Tableau",
  ],
};

export const allProjects = "/projects";
export const ideaNavigator = "/projects/ideaNavigator";
export const bounce = "/projects/bounce";
export const MIT = "MIT";

export const skillToProjects: { [key: string]: string } = {
  Python: ideaNavigator,
  TypeScript: allProjects,
  JavaScript: allProjects,
  HTML: allProjects,
  CSS: allProjects,
  Java: MIT,
  C: MIT,
  "Next.js": allProjects,
  React: allProjects,
  Redux: allProjects,
  "Node.js": MIT,
  XML: ideaNavigator,
  JSON: ideaNavigator,
  Git: allProjects,
  VSCode: allProjects,
  Tableau: MIT,
};

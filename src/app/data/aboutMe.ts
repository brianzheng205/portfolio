export const categoryToSkills: { [key: string]: string[] } = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "Assembly"],
  Technologies: [
    "Next.js",
    "React",
    "AWS",
    "APIs",
    "AI",
    "OpenAI",
    "Node.js",
    "CSS",
    "HTML",
    "VSCode",
    "Git",
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
  Java: MIT,
  C: MIT,
  Assembly: MIT,
  "Next.js": allProjects,
  React: allProjects,
  AWS: allProjects,
  APIs: allProjects,
  AI: ideaNavigator,
  OpenAI: ideaNavigator,
  "Node.js": MIT,
  CSS: allProjects,
  HTML: allProjects,
  VSCode: allProjects,
  Git: allProjects,
};

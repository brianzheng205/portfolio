import { ProjectInfo } from "../../types";

const description = `
  In my compiler class, my team created a fully-functional compiler that could
  translate a subset of the Decaf programming language into Assembly, using
  standard compiler methods and optimizations.
`;

const links = {};

const majorSkills = ["Rust", "Git"];

export const projectInfo: ProjectInfo = {
  title: "Compiler",
  links,
  description,
  skills: majorSkills,
  contributions: [
    {
      imageSrc: "/projects/compiler/StepByStep.webp",
      title: "Step by Step",
      body: {
        "Mission Purpose": `
          The compiler requires many different steps to be completed.
        `,
        Resources: majorSkills,
        Journey: `
          I learned the different steps of how compilers work, including parsing,
          semantic analysis, and code generation.
        `,
        Results: `
          We made progress on each step of the compiler's development, testing
          each step to ensure it was working as intended. This led us to
          create a fully-functional compiler.
        `,
      },
      pictureFirst: false,
    },
    {
      imageSrc: "/projects/compiler/rocket.webp",
      title: "Optimizations",
      body: {
        "Mission Purpose": `
          Our compiler needs to be fast and efficient.
        `,
        Resources: majorSkills,
        Journey: `
          We learned the implementation for several optimizations and implemented
          several dataflow optimizations as well as register allocation.
        `,
        Results: `
          Our compiler became almost twice as fast.
        `,
      },
      pictureFirst: true,
    },
  ],
  imagesInfo: [],
};

export default projectInfo;

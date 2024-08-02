export enum Page {
  AboutMe = "About Me",
  Experiences = "Experiences",
  Projects = "Projects",
  Contact = "Contact",
  Resume = "Resume",
}

export type ImageInfo = {
  src: string;
  caption: string;
};

export type ImageTextRowInfo = {
  imageSrc: string;
  title: string;
  metadata?: string;
  body: { [key: string]: string | string[] };
  links?: { [key: string]: string };
  pictureFirst?: boolean;
  priority?: boolean;
};

export type ProjectInfo = {
  title: string;
  links: { [key: string]: string };
  emilyLink?: string;
  description: ImageTextRowInfo[];
  contributions: ImageTextRowInfo[];
  skills: string[];
  imagesInfo: ImageInfo[];
};

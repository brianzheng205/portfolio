export enum Page {
  About = "About",
  Experiences = "Experiences",
  Projects = "Projects",
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
  description: string;
  skills: string[];
  contributions: ImageTextRowInfo[];
  imagesInfo: ImageInfo[];
};

export enum Page {
  AboutMe = "About Me",
  Projects = "Projects",
  Contact = "Contact",
}

export type ImageInfo = {
  src: string;
  caption: string;
};

export type ImageTextRowInfo = {
  imageSrc: string;
  title: string;
  metadata?: string;
  body: string;
  buttons?: { [key: string]: string };
  pictureLeft?: boolean;
};

export type ProjectInfo = {
  title: string;
  disclaimer: string;
  websiteLink: string;
  emilyLink?: string;
  description: ImageTextRowInfo[];
  contributions: ImageTextRowInfo[];
  skills: string[];
  imagesInfo: ImageInfo[];
  handleScrollToSection?: () => void;
};

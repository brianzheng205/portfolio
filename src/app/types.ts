import { Dispatch, SetStateAction } from "react";

export enum Page {
  AboutMe = "About Me",
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
  body: string;
  links?: { [key: string]: string };
  pictureLeft?: boolean;
  priority?: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

export type ProjectInfo = {
  title: string;
  disclaimer: string;
  links: { [key: string]: string };
  description: ImageTextRowInfo[];
  contributions: ImageTextRowInfo[];
  skills: string[];
  imagesInfo: ImageInfo[];
  setLoading?: Dispatch<SetStateAction<boolean>>;
};

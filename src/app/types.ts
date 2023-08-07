export enum Page {
  AboutMe = "About Me",
  Projects = "Projects",
  Contact = "Contact",
}

export type ProjectInfo = {
  imageSrc: string;
  title: string;
  metadata: string;
  body: string;
  buttons: { [key: string]: string };
  pictureLeft: boolean;
};

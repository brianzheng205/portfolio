import Header from "../../components/header";
import { Page } from "../../types";
import utilStyles from "../../utils.module.css";
import styles from "../project.module.css";

export default function IdeaNavigator() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
    </>
  );
}

import Header from "../../components/header";
import { Page } from "../../types";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/projects.module.css";

export default function Bounce() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
    </>
  );
}

import Header from "../../components/header";
import { Page } from "../../types";
import utilStyles from "../../utils.module.css";
import styles from "../project.module.css";

export default function Bounce() {
  return (
    <>
      <Header activePageRouter={Page.Projects} />
    </>
  );
}

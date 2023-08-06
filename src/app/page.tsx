import utilStyles from "./utils.module.css";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  const categoryToSkills: { [key: string]: string[] } = {
    Languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "Assembly"],
    Technologies: [
      "Next.js",
      "React",
      "Redux",
      "JSON",
      "AI",
      "OpenAI",
      "HTML",
      "CSS",
      "AWS",
      "Microsoft VSCode",
      "Git",
    ],
  };

  return (
    <>
      <div className={utilStyles.heading}>
        Hi, I'm Brian Zheng. I'm a junior MIT student majoring in CS with a 4.75
        GPA.
      </div>
      <div className={styles.intro}>
        <div>
          I am looking for a software engineer internship for Summer 2024.
        </div>
        <div>Contact me.</div>
      </div>
      <div className={styles.listsContainer}>
        {Object.keys(categoryToSkills).map((category) => (
          <div>
            <div className={styles.listTitle}>{category}</div>
            <ul>
              {categoryToSkills[category].map((skill) => (
                <li key={skill} className={styles.list}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

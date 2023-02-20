import styles from "./About.module.scss";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{t("about").toUpperCase()}</div>
    </div>
  );
};

export default About;

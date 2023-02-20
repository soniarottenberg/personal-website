import styles from "./Intro.module.scss";
import { useTranslation } from "next-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>{t("hello").toUpperCase()}</h1>
      <h3 className={styles.secondaryTitle}>{t("i am Sonia")}</h3>
      <h3 className={styles.secondaryTitle}>{t("front-end developper")}</h3>
    </div>
  );
};

export default Intro;

import styles from "./Intro.module.scss";
import { useTranslation } from "next-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleMobile}>
        {t("hello").toUpperCase()}
      </div>
      <div className={styles.circle}></div>
      <div className={styles.secondCircle}></div>
      <h3 className={styles.secondaryTitle}>{t("i am Sonia")}</h3>
      <h3 className={styles.secondaryTitle}>{t("front-end developper")}</h3>
    </div>
  );
};

export default Intro;

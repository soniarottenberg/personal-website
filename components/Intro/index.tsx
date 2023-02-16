import styles from "./Intro.module.scss";
import { useTranslation } from "next-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>hello world.</h1>
      <h3 className={styles.secondaryTitle}>i&#039;m Sonia</h3>
      <h3 className={styles.secondaryTitle}>{t("front-end developper")}</h3>
    </div>
  );
};

export default Intro;

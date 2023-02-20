import styles from "./Contact.module.scss";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{t("contact").toUpperCase()}</div>
      <div className={styles.infosContainer}>
        <div>Email</div>
        <div>Github</div>
        <div>Linkedin</div>
        <div>Behance</div>
      </div>
    </div>
  );
};

export default Contact;

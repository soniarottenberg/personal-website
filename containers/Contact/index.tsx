import styles from "./Contact.module.scss";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{t("contact").toUpperCase()}</div>
    </div>
  );
};

export default Contact;

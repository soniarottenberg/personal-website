import styles from "./Contact.module.scss";
import { useTranslation } from "next-i18next";
import Icon from "commons/Icon";
import Link from "next/link";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{t("contact").toUpperCase()}</div>
      <div className={styles.infosContainer}>
        <Link
          href={"https://www.behance.net/soniarottenberg"}
          target={"_blank"}
        >
          <Icon icon={"behance"} size={"medium"} />
        </Link>
        <Link href={"https://github.com/soniarottenberg"} target={"_blank"}>
          <Icon icon={"github"} size={"medium"} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/soniarottenberg/"}
          target={"_blank"}
        >
          <Icon icon={"linkedin"} size={"medium"} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;

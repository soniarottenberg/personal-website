import { useTranslation } from "next-i18next";
import { TagProps } from "typescript/interfaces";
import styles from "./Tag.module.scss";

const Tag = ({ label }: TagProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.triangleDown}></div>
      {t(label)}
    </div>
  );
};

export default Tag;

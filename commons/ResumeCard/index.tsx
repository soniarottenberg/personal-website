import styles from "./ResumeCard.module.scss";
import { ResumeCardProps } from "typescript/interfaces";
import { useTranslation } from "next-i18next";

const ResumeCard = ({ description }: ResumeCardProps) => {
  const { t } = useTranslation();
  return <div className={styles.container}>{t(description)}</div>;
};

export default ResumeCard;

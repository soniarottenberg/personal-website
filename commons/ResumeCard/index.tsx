import styles from "./ResumeCard.module.scss";
import { ResumeCardProps } from "typescript/interfaces";

const ResumeCard = ({ description }: ResumeCardProps) => {
  return <div className={styles.container}>{description}</div>;
};

export default ResumeCard;

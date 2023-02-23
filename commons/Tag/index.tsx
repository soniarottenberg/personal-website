import { TagProps } from "typescript/interfaces";
import styles from "./Tag.module.scss";

const Tag = ({ label }: TagProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.triangleDown}></div>
      {label}
    </div>
  );
};

export default Tag;

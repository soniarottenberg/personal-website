import styles from "./Menu.module.scss";
import { MenuProps } from "typescript/interfaces";

const Menu = ({ options }: MenuProps) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <div key={option}>{option}</div>
      ))}
    </div>
  );
};

export default Menu;

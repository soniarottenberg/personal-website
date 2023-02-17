import styles from "./BurgerMenuButton.module.scss";
import { BurgerMenuButtonProps } from "typescript/interfaces";

const BurgerMenuButton = ({
  handleBurgerMenuButtonClick,
  isMenuOpen,
}: BurgerMenuButtonProps) => {
  return (
    <div
      className={styles.container}
      onClick={() => handleBurgerMenuButtonClick()}
    >
      <span className={isMenuOpen ? styles.lineOne : styles.line}></span>
      <span className={isMenuOpen ? styles.lineTwo : styles.line}></span>
      <span className={isMenuOpen ? styles.lineThree : styles.line}></span>
    </div>
  );
};

export default BurgerMenuButton;

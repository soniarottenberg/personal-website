import styles from "./Menu.module.scss";
import { MenuProps } from "typescript/interfaces";
import { useTranslation } from "next-i18next";

const Menu = ({ options, handleMenuSelection }: MenuProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div
        className={styles.menuItem}
        onClick={() => handleMenuSelection("header")}
      >
        {t("home")}
      </div>
      {options.map((option) => (
        <div
          className={styles.menuItem}
          key={option}
          onClick={() => handleMenuSelection(option)}
        >
          {t(option)}
        </div>
      ))}
    </div>
  );
};

export default Menu;

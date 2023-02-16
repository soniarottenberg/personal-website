import styles from "./NavbarElement.module.scss";
import { NavbarElementProps } from "typescript/interfaces";
import { useTranslation } from "react-i18next";

const NavbarElement = ({ label, selectNavbarItem }: NavbarElementProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={styles.container}
      onClick={() => selectNavbarItem(t(`${label}`))}
    >
      {label}
    </div>
  );
};

export default NavbarElement;

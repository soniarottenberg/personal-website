import styles from "./NavbarElement.module.scss";
import { NavbarElementProps } from "typescript/interfaces";
import { useTranslation } from "next-i18next";

const NavbarElement = ({ label, selectNavbarItem }: NavbarElementProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container} onClick={() => selectNavbarItem(label)}>
      {t(label)}
    </div>
  );
};

export default NavbarElement;

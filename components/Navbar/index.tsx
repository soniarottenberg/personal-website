import styles from "./Navbar.module.scss";
import NavbarElement from "commons/NavbarElement";
import LanguageSwitch from "commons/LanguageSwitch";
import { NavbarProps } from "typescript/interfaces";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({ selectNavbarItem }: NavbarProps) => {
  const { i18n } = useTranslation();

  const navElements = useMemo(() => {
    return ["about", "stack", "work", "contact"];
  }, []);

  const handleLocale = useCallback(
    (data: string) => {
      i18n.changeLanguage(data);
    },
    [i18n]
  );

  useEffect(() => {
    handleLocale(i18n.language);
  }, [handleLocale, i18n.language]);

  return (
    <div className={styles.container}>
      <div className={styles.name} onClick={() => selectNavbarItem("header")}>
        Sonia Rottenberg
      </div>

      <div className={styles.navContainer}>
        {navElements.map((el, i) => (
          <NavbarElement
            key={i}
            label={el}
            selectNavbarItem={selectNavbarItem}
          />
        ))}
      </div>
      <LanguageSwitch
        handleClick={handleLocale}
        options={["fr", "en"]}
        currentLanguage={i18n.language}
      />
    </div>
  );
};

export default Navbar;

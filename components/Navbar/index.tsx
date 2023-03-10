import styles from "./Navbar.module.scss";
import NavbarElement from "commons/NavbarElement";
import LanguageSwitch from "commons/LanguageSwitch";
import BurgerMenuButton from "commons/BurgerMenuButton";
import { NavbarProps } from "typescript/interfaces";
import { useCallback, useEffect } from "react";
import { useTranslation } from "next-i18next";

const Navbar = ({
  selectNavbarItem,
  handleBurgerMenuButtonClick,
  menuOpen,
  options,
}: NavbarProps) => {
  const { i18n } = useTranslation();

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
      <div className={styles.burgerMenuButtonContainer}>
        <BurgerMenuButton
          handleBurgerMenuButtonClick={() => handleBurgerMenuButtonClick()}
          isMenuOpen={menuOpen}
        />
      </div>

      <div className={styles.navContainer}>
        <NavbarElement
          key={"home"}
          label={"home"}
          selectNavbarItem={selectNavbarItem}
        />
        {options.map((el, i) => (
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

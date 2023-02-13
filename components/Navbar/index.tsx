import NavbarElement from "commons/NavbarElement";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  selectNavbarItem: (arg: string) => void;
}

const Navbar = ({ selectNavbarItem }: NavbarProps) => {
  let elements: string[] = ["about", "stack", "work", "contact"];

  return (
    <div className={styles.container}>
      <div className={styles.name} onClick={() => selectNavbarItem("header")}>
        Sonia Rottenberg
      </div>

      <div className={styles.navContainer}>
        {elements.map((el, i) => (
          <NavbarElement
            key={i}
            label={el}
            selectNavbarItem={selectNavbarItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

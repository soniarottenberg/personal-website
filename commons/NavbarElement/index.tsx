import styles from "./NavbarElement.module.scss";

interface NavbarElementProps {
  label: string;
  selectNavbarItem: (arg: string) => void;
}

const NavbarElement = ({ label, selectNavbarItem }: NavbarElementProps) => {
  return (
    <div className={styles.container} onClick={() => selectNavbarItem(label)}>
      {label}
    </div>
  );
};

export default NavbarElement;

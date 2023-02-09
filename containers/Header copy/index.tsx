import Intro from "../../components/Intro";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Intro />
    </div>
  );
};

export default Header;

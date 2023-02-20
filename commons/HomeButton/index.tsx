import styles from "./HomeButton.module.scss";
import Home from "../../public/home.svg";

const HomeButton = () => {
  return <Home className={styles.icon} />;
};

export default HomeButton;

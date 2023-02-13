import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>hello world.</h1>
      <h3 className={styles.secondaryTitle}>i&#039;m Sonia</h3>
      <h3 className={styles.secondaryTitle}>front-end developper</h3>
    </div>
  );
};

export default Intro;

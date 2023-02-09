import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>hello world.</h1>
      <h3 className={styles.secondaryTitle}>i am Sonia</h3>
      <h3 className={styles.secondaryTitle}>front-end Developper</h3>
    </div>
  );
};

export default Intro;

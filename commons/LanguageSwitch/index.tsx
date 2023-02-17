import styles from "./Switch.module.scss";
import { SwitchProps } from "typescript/interfaces";

const LanguageSwitch = ({
  options,
  handleClick,
  currentLanguage,
}: SwitchProps) => {
  return (
    <div className={styles.container}>
      {options?.map((option, index) => (
        <button
          key={index}
          onClick={() => handleClick(option)}
          className={
            option === currentLanguage
              ? styles.buttonActive
              : styles.buttonInactive
          }
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;

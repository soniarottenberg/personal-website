import styles from "./Timeline.module.scss";
import { TimelineProps } from "typescript/interfaces";
import Tag from "commons/Tag";
import { useState } from "react";
import ResumeCard from "commons/ResumeCard";

const Timeline = ({ history }: TimelineProps) => {
  const [activeText, setActiveText] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.lineContainer}>
        {history.map((el, index) => (
          <div
            key={index}
            className={styles.dateContainer}
            onMouseEnter={() => setActiveText(el.description)}
          >
            <div className={styles.stop}></div>
            <div className={styles.date}>
              <Tag label={el.date} />
            </div>
          </div>
        ))}
      </div>
      {activeText && (
        <div className={styles.activeTextContainer}>
          <ResumeCard description={activeText} />
        </div>
      )}
    </div>
  );
};

export default Timeline;

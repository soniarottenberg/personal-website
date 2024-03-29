import styles from "./About.module.scss";
import { useTranslation } from "next-i18next";
import Timeline from "components/Timeline";
import { useMemo } from "react";

const About = () => {
  const { t } = useTranslation();

  const historyData = useMemo(() => {
    return [
      {
        date: "2016",
        description: "Graduate from ISCOM Lyon in Communication & Markeking",
      },
      {
        date: "2017",
        description:
          "Hired at L'oliver Insurance as a web project manager in Paris",
      },
      {
        date: "early 2019",
        description:
          "After 2 years, and despite working with a wonderful team,I realize that I need to be in more technical subjects. Time for a change then.",
      },
      {
        date: "mid 2019",
        description:
          "10 intensive weeks of training to become a web developper with Le Wagon.",
      },
      {
        date: "late 2019",
        description:
          "Hired by Epsor as Growth Engineer. Developping landings, scrapping data and finding ideas to grow.",
      },
      {
        date: "2020",
        description: "Covid hit. The latest hires were fired. Well...",
      },
      {
        date: "2021",
        description:
          "Searching for a job, self training, more searching for a job.",
      },
      {
        date: "2022",
        description: "Hired as a Front-end Developper at Now.online !",
      },
    ];
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitleMobile}>
        {t("about").toUpperCase()}
      </div>
      <Timeline history={historyData} />
      <div className={styles.timelineMobile}>{t("about mobile version")}</div>
    </div>
  );
};

export default About;

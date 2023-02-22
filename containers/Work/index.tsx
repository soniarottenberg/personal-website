import Card from "commons/Card";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Work.module.scss";

const Work = () => {
  const { t } = useTranslation();

  const works = useMemo(() => {
    return [
      {
        title: "Now Online",
        img: "/screens/nowonline.png",
        link: "https://now.online/",
        stack: [
          "nextjs",
          "react",
          "javascript",
          "sass",
          "storybook",
          "graphql",
        ],
        description: "Marketplace",
      },
      {
        title: "Epsor",
        img: "/screens/epsor.jpeg",
        link: "https://epsor.fr/",
        stack: ["react", "javascript", "prismic"],
        description: "Growth",
      },
    ];
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{t("work").toUpperCase()}</div>
      <div className={styles.cardsContainer}>
        {works.map((work) => (
          <div key={work.title} className={styles.cardContainer}>
            <Card
              title={work.title}
              img={work.img}
              link={work.link}
              stack={work.stack}
              description={work.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

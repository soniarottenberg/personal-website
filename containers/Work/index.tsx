import Card from "commons/Card";
import { useMemo } from "react";
import styles from "./Work.module.scss";

const Work = () => {
  const works = useMemo(() => {
    return [
      {
        title: "Now Online",
        img: "/screens/epsor.jpeg",
        link: "https://now.online/",
        stack: [
          "Nextjs",
          "Reactjs",
          "Javascript",
          "Sass",
          "Storybook",
          "GraphQL",
        ],
        description: "Marketplace",
      },
      {
        title: "Epsor",
        img: "/screens/nowonline.png",
        link: "https://epsor.fr/",
        stack: ["Reactjs", "Javascript", "Prismic"],
        description: "Growth",
      },
    ];
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>WORK</div>
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

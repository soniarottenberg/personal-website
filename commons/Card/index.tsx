import styles from "./Card.module.scss";
import { CardProps } from "typescript/interfaces";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, link, img, stack, description }: CardProps) => {
  return (
    <div className={styles.container}>
      <Link href={link} target="_blank">
        <div className={styles.imageContainer}>
          <div className={styles.titleContainer}>{title}</div>
          {img && (
            <Image
              alt={`${title}-link`}
              src={img}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          )}
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.stackContainer}>
            {stack.map((element, index) => (
              <div
                key={element}
                className={
                  index === -1 ? styles.lastStackElement : styles.stackElement
                }
              >
                {element}
              </div>
            ))}
          </div>
          <div>{description}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

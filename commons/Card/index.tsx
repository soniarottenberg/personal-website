import styles from "./Card.module.scss";
import { CardProps } from "typescript/interfaces";
import Image from "next/image";
import Link from "next/link";
import Icon from "commons/Icon";

const Card = ({ title, link, img, stack, description }: CardProps) => {
  return (
    <div className={styles.container}>
      <Link href={link} target="_blank" className={styles.link}>
        <div className={styles.imageContainer}>
          {img && (
            <Image
              alt={`${title}-link`}
              src={img}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.title}>{title}</div>
          <div>{description}</div>
          <div className={styles.stackContainer}>
            {stack.map((element) => (
              <div key={element} className={styles.iconContainer}>
                <Icon icon={element} />
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

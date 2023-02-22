import styles from "./Icon.module.scss";
import { useMemo } from "react";
import React from "../../public/icons/react.svg";
import Javascript from "../../public/icons/javascript.svg";
import Nextjs from "../../public/icons/nextjs.svg";
import Graphql from "../../public/icons/graphql.svg";
import Sass from "../../public/icons/sass.svg";
import Prismic from "../../public/icons/prismic.svg";
import Storybook from "../../public/icons/storybook.svg";
import { IconProps } from "typescript/interfaces";

const Icon = ({ icon }: IconProps) => {
  const displayIcon = useMemo(() => {
    if (icon === "react") return <React className={styles.icon} />;
    if (icon === "javascript") return <Javascript className={styles.icon} />;
    if (icon === "nextjs") return <Nextjs className={styles.icon} />;
    if (icon === "graphql") return <Graphql className={styles.icon} />;
    if (icon === "sass") return <Sass className={styles.icon} />;
    if (icon === "prismic") return <Prismic className={styles.icon} />;
    if (icon === "storybook") return <Storybook className={styles.icon} />;
  }, [icon]);

  return <>{displayIcon}</>;
};

export default Icon;

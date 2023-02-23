import styles from "./Icon.module.scss";
import { useMemo } from "react";
import React from "../../public/icons/react.svg";
import Javascript from "../../public/icons/javascript.svg";
import Nextjs from "../../public/icons/nextjs.svg";
import Graphql from "../../public/icons/graphql.svg";
import Sass from "../../public/icons/sass.svg";
import Prismic from "../../public/icons/prismic.svg";
import Storybook from "../../public/icons/storybook.svg";
import Behance from "../../public/icons/behance.svg";
import Github from "../../public/icons/github.svg";
import Linkedin from "../../public/icons/linkedin.svg";
import { IconProps } from "typescript/interfaces";

const Icon = ({ icon, size }: IconProps) => {
  const displayIcon = useMemo(() => {
    if (icon === "react")
      return (
        <React className={size === "small" ? styles.icon : styles.iconMedium} />
      );
    if (icon === "javascript")
      return (
        <Javascript
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
    if (icon === "nextjs")
      return (
        <Nextjs
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
    if (icon === "graphql")
      return (
        <Graphql
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
    if (icon === "sass")
      return (
        <Sass className={size === "small" ? styles.icon : styles.iconMedium} />
      );
    if (icon === "prismic")
      return (
        <Prismic
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
    if (icon === "storybook")
      return (
        <Storybook
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
    if (icon === "behance")
      return (
        <Behance
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
    if (icon === "github")
      return (
        <Github
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
    if (icon === "linkedin")
      return (
        <Linkedin
          className={size === "small" ? styles.icon : styles.iconMedium}
        />
      );
  }, [icon, size]);

  return <>{displayIcon}</>;
};

export default Icon;

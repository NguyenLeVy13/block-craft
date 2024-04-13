import React from "react";
import styles from "./styles.module.css";
import getClassNameFactory from "../../../../lib/get-class-name-factory";
import { ComponentConfig } from "@measured/puck";

const getClassName = getClassNameFactory("Hero", styles);

export type HeroProps = {};

export const Hero: ComponentConfig<HeroProps> = {
  fields: {},
  defaultProps: {},
  render: () => {
    return <div className={getClassName()}></div>;
  },
};

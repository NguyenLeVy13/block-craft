import React from "react";
import styles from "./styles.module.css";
import getClassNameFactory from "../../../../lib/get-class-name-factory";
import { ComponentConfig, DropZone } from "@measured/puck";
import { Section } from "../Section";

const getClassName = getClassNameFactory("Flex", styles);

export type FlexProps = {
  items: { minItemWidth?: number }[];
  minItemWidth: number;
};

export const Flex: ComponentConfig<FlexProps> = {
  fields: {
    items: {
      type: "array",
      arrayFields: {
        minItemWidth: {
          label: "Minimum Item Width",
          type: "number",
        },
      },
      getItemSummary: (_, id) => `Item ${id + 1}`,
    },
    minItemWidth: {
      label: "Minimum Item Width",
      type: "number",
    },
  },
  defaultProps: {
    items: [{}, {}],
    minItemWidth: 356,
  },
  render: ({ items, minItemWidth }) => {
    return (
      <Section>
        <div className={getClassName()}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className={getClassName("item")}
              style={{ minWidth: item.minItemWidth || minItemWidth }}
            >
              <DropZone zone={`item-${idx}`} />
            </div>
          ))}
        </div>
      </Section>
    );
  },
};

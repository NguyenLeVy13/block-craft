import { ComponentConfig } from "@measured/puck";
import React from "react";

export type VerticalSpaceProps = {
    size: string;
};

export const VerticalSpace: ComponentConfig<VerticalSpaceProps> = {
    defaultProps: {
        size: "24px",
    },
    render: ({ size }) => {
        return <div style={{ height: size, width: "100%" }} />;
    },
};

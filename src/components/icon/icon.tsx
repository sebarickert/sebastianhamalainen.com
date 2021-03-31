import React from "react";
import IconChevronDoubleRight from "./icon.chevronDoubleRight";
import IconExternal from "./icon.external";
import IconChevronDoubleLeft from "./icon.chevronDoubleLeft";
import IconChevronRight from "./icon.chevronRight";
import IconChevronLeft from "./icon.chevronLeft";
import IconAdjustments from "./icon.adjustments";

export interface IconElementProps {
  className?: string;
}
interface IconProps extends IconElementProps {
  type:
    | "external-link"
    | "chevron-double-right"
    | "chevron-double-left"
    | "chevron-right"
    | "chevron-left"
    | "adjustments";
}

const Icon = ({ type }: IconProps): JSX.Element => {
  switch (type) {
    case "external-link":
      return <IconExternal />;
    case "chevron-double-right":
      return <IconChevronDoubleRight />;
    case "chevron-double-left":
      return <IconChevronDoubleLeft />;
    case "chevron-right":
      return <IconChevronRight />;
    case "chevron-left":
      return <IconChevronLeft />;
    case "adjustments":
      return <IconAdjustments />;
  }
};

export default Icon;

import { HTMLProps } from "react";
import { toClassNames } from "utils";

import "./styles.css";

export const ParentChildTwo = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => (
  <div className={toClassNames("parent-child-two", className)} {...props} />
);

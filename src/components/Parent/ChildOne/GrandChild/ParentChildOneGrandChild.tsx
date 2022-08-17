import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLElement> {
  name: string;
}

export const ParentChildOneGrandChild = ({ name, ...props }: Props) => {
  return <code {...props}>&lt;{name}/&gt;</code>;
};

import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ onClick, ...props }: Props) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Button clicked");
      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  return <button {...props} onClick={handleClick} />;
};

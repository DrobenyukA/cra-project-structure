import { ReactNode, useState } from "react";
import { ThemeProvider } from "@mui/material";

import { lightTheme, darkTheme } from "./themes";

interface Props {
  children: ReactNode;
}

export const MUIThemeProvider = (props: Props) => {
  // You can replace this state with global (Redux)
  const [selected] = useState("light" as const);
  const theme = selected === "light" ? lightTheme : darkTheme;
  return <ThemeProvider {...props} theme={theme} />;
};

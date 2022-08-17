import { AppHeaderNavigation } from "./Navigation";

import logoImage from "assets/logo.svg";

import "./styles.css";

export const AppHeader = () => (
  <header className="app-header">
    <img className="app-header-logo" src={logoImage} alt="Application logo" />
    <AppHeaderNavigation />
  </header>
);

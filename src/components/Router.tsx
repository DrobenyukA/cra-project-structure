import { Routes, Route } from "react-router-dom";

import { ROUTES } from "routes";
import { HomePage } from "pages";
import { LoginPage } from "pages/LoginPage";

export const Router = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<HomePage />} />
    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
  </Routes>
);

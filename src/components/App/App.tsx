import { useDidMount } from "hooks";
import { Router } from "components";

export const App = () => {
  useDidMount(() => console.log("Application mounted"));

  return <Router />;
};

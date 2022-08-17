import { useDidMount } from "hooks";
import { HomePage } from "pages";

export const App = () => {
  useDidMount(() => console.log("Application mounted"));

  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

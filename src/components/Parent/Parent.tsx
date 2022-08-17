import { ParentChildOne } from "./ChildOne";
import { ParentChildTwo } from "./ChildTwo";

import "./styles.css";

export const Parent = () => {
  return (
    <section className="parent">
      <h2>This is a parent component</h2>
      <ParentChildOne />
      <ParentChildTwo>
        This is a second child in a Parent component
      </ParentChildTwo>
    </section>
  );
};

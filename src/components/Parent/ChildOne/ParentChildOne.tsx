import { ParentChildOneGrandChild } from "./GrandChild";

import "./styles.css";

export const ParentChildOne = () => (
  <div className="parent-child-one">
    First child in <ParentChildOneGrandChild name="Parent" /> component
  </div>
);

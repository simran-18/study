import { Children } from "react";
import CustomCase from "./CustomCase";
import DefaultCase from "./DefaultCase";

function CustomSwitch({ children, value }) {
  let passedCase = null;
  let defaultCase = null;

  const childrenArray = Children.toArray(children);

  childrenArray.forEach((child) => {
    if (child.type === DefaultCase) {
      defaultCase = child;
      return;
    }

    if (child.type === CustomCase && passedCase === null) {
      const caseValue = child.props.value;

      if (typeof caseValue === "function") {
        if (caseValue(value)) {
          passedCase = child;
        }
      } else if (caseValue === value) {
        passedCase = child;
      }
    }
  });

  return passedCase || defaultCase || null;
}

export default CustomSwitch;

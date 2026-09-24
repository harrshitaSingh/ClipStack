import { createElement } from "react";

export function TextIcon() {
  return createElement(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
    },
    createElement("path", {
      d: "M7 4h10a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 0 1 2-2z",
    }),
    createElement("path", { d: "M9 9h6M9 13h4", strokeLinecap: "round" })
  );
}

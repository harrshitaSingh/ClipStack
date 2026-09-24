import { createElement } from "react";

export function BackIcon() {
  return createElement(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#3c4456",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    createElement("path", { d: "M15 18l-6-6 6-6" }),
  );
}

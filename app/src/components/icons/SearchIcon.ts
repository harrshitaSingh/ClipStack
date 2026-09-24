import { createElement } from "react";

export function SearchIcon() {
  return createElement(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#9aa3b5",
      strokeWidth: "2",
    },
    createElement("circle", { cx: "11", cy: "11", r: "7" }),
    createElement("path", { d: "M20 20l-3.2-3.2", strokeLinecap: "round" })
  );
}

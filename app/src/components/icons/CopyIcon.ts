import { createElement } from "react";

export function CopyIcon() {
  return createElement(
    "svg",
    { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none" },
    createElement("rect", {
      x: "8",
      y: "8",
      width: "11",
      height: "12",
      rx: "2",
      fill: "white",
    }),
    createElement("rect", {
      x: "5",
      y: "4",
      width: "11",
      height: "12",
      rx: "2",
      stroke: "white",
      strokeWidth: "1.8",
    })
  );
}

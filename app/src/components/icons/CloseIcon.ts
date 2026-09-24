import { createElement } from "react";

export function CloseIcon() {
  return createElement(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#3c4456",
      strokeWidth: "2",
      strokeLinecap: "round",
    },
    createElement("path", { d: "M6 6l12 12M18 6L6 18" }),
  );
}

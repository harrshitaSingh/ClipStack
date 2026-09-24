import { createElement } from "react";

export function TrashIcon() {
  return createElement(
    "svg",
    {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
    },
    createElement("path", {
      d: "M4 7h16M9 7V5h6v2M8 7l1 13h6l1-13",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
}

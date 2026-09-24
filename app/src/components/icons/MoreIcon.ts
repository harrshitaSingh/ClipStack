import { createElement } from "react";

export function MoreIcon() {
  return createElement(
    "svg",
    { width: "18", height: "18", viewBox: "0 0 24 24", fill: "#9aa3b5" },
    createElement("circle", { cx: "12", cy: "5", r: "1.6" }),
    createElement("circle", { cx: "12", cy: "12", r: "1.6" }),
    createElement("circle", { cx: "12", cy: "19", r: "1.6" })
  );
}

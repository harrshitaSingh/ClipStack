import { createElement } from "react";

export function LogoIcon() {
  return createElement(
    "div",
    {
      className:
        "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7b8cff] to-[#6d5efc] shadow-sm",
    },
    createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none" },
      createElement("rect", {
        x: "4",
        y: "7",
        width: "14",
        height: "12",
        rx: "2.5",
        fill: "white",
        opacity: "0.9",
      }),
      createElement("rect", {
        x: "7",
        y: "4",
        width: "13",
        height: "11",
        rx: "2.5",
        fill: "#eef1ff",
      }),
      createElement("path", {
        d: "M11 9.5h5M11 12.5h3.5",
        stroke: "#6d5efc",
        strokeWidth: "1.6",
        strokeLinecap: "round",
      })
    )
  );
}

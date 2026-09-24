import { createElement } from "react";

export function ImageKindPreview() {
  return createElement(
    "div",
    { className: "relative h-9 w-9 overflow-hidden rounded-lg bg-[#7eb7e8]" },
    createElement("div", {
      className: "absolute top-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-[#ffe9a8]",
    }),
    createElement("div", {
      className: "absolute -bottom-2 -left-2 h-7 w-8 rounded-full bg-[#6aa05a]",
    }),
    createElement("div", {
      className: "absolute right-0 bottom-0 h-5 w-6 rounded-tl-[16px] bg-[#4d7c3d]",
    })
  );
}

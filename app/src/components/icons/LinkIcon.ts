import { createElement } from "react";

type LinkIconProps = {
  size?: number;
};

export function LinkIcon({ size = 16 }: LinkIconProps) {
  return createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
    },
    createElement("path", {
      d: "M10 13a5 5 0 0 0 7.1.1l2.2-2.2a5 5 0 0 0-7.1-7.1L11 5",
      strokeLinecap: "round",
    }),
    createElement("path", {
      d: "M14 11a5 5 0 0 0-7.1-.1L4.7 13a5 5 0 0 0 7.1 7.1L13 19",
      strokeLinecap: "round",
    })
  );
}

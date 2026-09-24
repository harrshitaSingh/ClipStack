import { createElement } from "react";

type UsageMeterProps = {
  used: number;
  total: number;
};

export function UsageMeter({ used, total }: UsageMeterProps) {
  const percent = `${(used / total) * 100}%`;

  return createElement(
    "div",
    { className: "flex items-center gap-2" },
    createElement(
      "span",
      { className: "text-[12px] font-medium text-[#5b6476]" },
      `${used} / ${total} items`
    ),
    createElement(
      "div",
      { className: "h-1.5 w-24 overflow-hidden rounded-full bg-[#eceff5]" },
      createElement("div", {
        className: "h-full rounded-full bg-gradient-to-r from-[#5b7cff] to-[#6d5efc]",
        style: { width: percent },
      })
    )
  );
}

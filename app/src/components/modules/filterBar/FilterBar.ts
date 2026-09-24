import { createElement } from "react";
import { FilterChip } from "./FilterChip.ts";
import { LinkIcon } from "../../icons/LinkIcon";

export function FilterBar() {
  return createElement(
    "div",
    {
      className:
        "mb-3 flex flex-nowrap gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
    },
    createElement(FilterChip, { label: "All", count: 12, active: true }),
    createElement(FilterChip, { label: "Text", count: 8 }),
    createElement(FilterChip, {
      label: "Links",
      count: 2,
      icon: createElement(LinkIcon, { size: 12 }),
    }),
    createElement(FilterChip, {
      label: "Code",
      count: 2,
      icon: createElement("span", { className: "text-[11px]" }, "</>"),
    })
  );
}

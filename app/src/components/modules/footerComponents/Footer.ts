import { createElement } from "react";
import { ClearAllButton } from "./ClearAllButton";
import { UsageMeter } from "./UsageMeter";

export function Footer() {
  return createElement(
    "footer",
    { className: "mt-3 flex items-center justify-between border-t border-[#f0f2f7] pt-3" },
    createElement(UsageMeter, { used: 12, total: 50 }),
    createElement(ClearAllButton, null)
  );
}

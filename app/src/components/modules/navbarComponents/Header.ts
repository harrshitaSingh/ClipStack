import { createElement } from "react";
import { LogoIcon } from "../../icons/LogoIcon";
import { SearchButton } from "./search/SearchButton";
import { SettingsButton } from "./settings/SettingsButton";
import { MoreButton } from "./MoreButton";

export function Header() {
  return createElement(
    "header",
    { className: "mb-3 flex items-start justify-between" },
    createElement(
      "div",
      { className: "flex items-center gap-2.5" },
      createElement(LogoIcon, null),
      createElement(
        "div",
        null,
        createElement("h1", { className: "text-[18px] leading-5 font-bold text-[#1d2433]" }, "ClipStack"),
        createElement(
          "p",
          { className: "mt-0.5 text-[11px] text-[#9aa3b5]" },
          "Everything you copy, always with you"
        )
      )
    ),
    createElement(
      "div",
      { className: "flex items-center gap-1 pt-1" },
      createElement(SearchButton, null),
      createElement(SettingsButton, null),
      createElement(MoreButton, null)
    )
  );
}

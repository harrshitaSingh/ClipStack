import { createElement } from "react";
import { Button } from "../../Button";
import { MoreIcon } from "../../icons/MoreIcon";

export function MoreButton() {
  return createElement(
    Button,
    {
      className: "cursor-pointer rounded-lg p-1.5 hover:bg-[#f4f6fb]",
      "aria-label": "More",
    },
    createElement(MoreIcon, null)
  );
}

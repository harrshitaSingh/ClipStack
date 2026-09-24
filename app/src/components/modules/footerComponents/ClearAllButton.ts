import { createElement } from "react";
import { Button } from "../../Button";
import { TrashIcon } from "../../icons/TrashIcon";

export function ClearAllButton() {
  return createElement(
    Button,
    {
      className:
        "flex cursor-pointer items-center gap-1 rounded-lg bg-[#fff1f2] px-2.5 py-1.5 text-[12px] font-medium text-[#f07178] hover:bg-[#ffe4e6]",
    },
    createElement(TrashIcon, null),
    "Clear all"
  );
}

import { createElement } from "react";
import { Button } from "../../../Button";
import { SearchIcon } from "../../../icons/SearchIcon";

export function SearchButton() {
  return createElement(
    Button,
    {
      className: "cursor-pointer rounded-lg p-1.5 hover:bg-[#f4f6fb]",
      "aria-label": "Search",
    },
    createElement(SearchIcon, null)
  );
}

import { createElement } from "react";
import { Button } from "../../Button";
import { StarIcon } from "../../icons/StarIcon";

type StarButtonProps = {
  filled: boolean;
};

export function StarButton({ filled }: StarButtonProps) {
  return createElement(
    Button,
    {
      className: "cursor-pointer rounded-md p-0.5 hover:bg-[#f4f6fb]",
      "aria-label": "Star",
    },
    createElement(StarIcon, { filled })
  );
}

import { createElement } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "../../../Button";
import { SettingsIcon } from "../../../icons/SettingsIcon";

export function SettingsButton() {
  const navigate = useNavigate();

  return createElement(
    Button,
    {
      className: "cursor-pointer rounded-lg p-1.5 hover:bg-[#f4f6fb]",
      "aria-label": "Settings",
      onClick: () => {
        void navigate({ to: "/settings",  });
      },
    },
    createElement(SettingsIcon, null),
  );
}

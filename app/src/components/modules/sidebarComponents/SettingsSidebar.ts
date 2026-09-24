import { createElement, useState } from "react";
import type { ReactNode } from "react";
import { Button } from "../../Button";
import { clips } from "../../../data/clips";
import { GeneralSettings } from "./GeneralSetting";

type SettingsSection = "General" | "Privacy" | "Shortcuts" | "Appearance" | "About";

const iconProps = {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "shrink-0",
};

function GeneralIcon() {
  return createElement(
    "svg",
    iconProps,
    createElement("path", {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    }),
    createElement("circle", { cx: "12", cy: "12", r: "3" }),
  );
}

function PrivacyIcon() {
  return createElement(
    "svg",
    iconProps,
    createElement("path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    }),
  );
}

function ShortcutsIcon() {
  return createElement(
    "svg",
    iconProps,
    createElement("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    createElement("path", {
      d: "M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10",
    }),
  );
}

function AppearanceIcon() {
  return createElement(
    "svg",
    iconProps,
    createElement("circle", { cx: "12", cy: "12", r: "8" }),
    createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3",
      fill: "currentColor",
      stroke: "none",
    }),
  );
}

function AboutIcon() {
  return createElement(
    "svg",
    iconProps,
    createElement("circle", { cx: "12", cy: "12", r: "9" }),
    createElement("path", { d: "M12 16v-4" }),
    createElement("path", { d: "M12 8h.01" }),
  );
}

type SidebarItem = {
  label: SettingsSection;
  icon: () => ReactNode;
  page: typeof GeneralSettings;
};

const settingsItems: SidebarItem[] = [
  { label: "General", icon: GeneralIcon, page: GeneralSettings },
  { label: "Privacy", icon: PrivacyIcon, page: GeneralSettings },
  { label: "Shortcuts", icon: ShortcutsIcon, page: GeneralSettings },
  { label: "Appearance", icon: AppearanceIcon, page: GeneralSettings },
  { label: "About", icon: AboutIcon, page: GeneralSettings },
];

export function SettingsSidebar() {
  const [selected, setSelected] = useState<SettingsSection>("General");
  const activeItem = settingsItems.find((item) => item.label === selected);
  const Panel = activeItem?.page;

  return createElement(
    "div",
    { className: "mt-3 flex min-w-0 items-stretch gap-2" },
    createElement(
      "nav",
      {
        "aria-label": "Settings",
        className: "flex w-[104px] shrink-0 flex-col gap-0.5",
      },
      settingsItems.map((item) => {
        const isActive = item.label === selected;

        return createElement(
          Button,
          {
            key: item.label,
            "aria-current": isActive ? "page" : undefined,
            className: isActive
              ? "flex w-full min-w-0 cursor-pointer items-center gap-1.5 rounded-xl bg-[#ece8ff] px-2 py-2 text-left text-[12px] font-semibold text-[#5b4ef0]"
              : "flex w-full min-w-0 cursor-pointer items-center gap-1.5 rounded-xl px-2 py-2 text-left text-[12px] font-medium text-[#7a8394] hover:bg-white",
            onClick: () => {
              setSelected(item.label);
            },
          },
          createElement(item.icon, null),
          createElement("span", { className: "min-w-0 truncate" }, item.label),
        );
      }),
    ),
    createElement(
      "div",
      { className: "min-h-[280px] min-w-0 flex-1 overflow-hidden rounded-[22px] bg-white p-2" },
      Panel ? createElement(Panel, { clips }) : null,
    ),
  );
}

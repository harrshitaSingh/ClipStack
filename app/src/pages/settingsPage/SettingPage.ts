import { createElement } from "react";
import { SettingsNavbar } from "../../components/modules/navbarComponents/SettingsNavbar";
import { SettingsSidebar } from "../../components/modules/sidebarComponents/SettingsSidebar";

export function SettingsPage() {
  return createElement(
    "div",
    {
      className:
        "flex w-full max-w-[400px] flex-col overflow-hidden rounded-[28px] bg-[#f6f7fb] p-4 shadow-[0_20px_50px_rgba(90,70,180,0.18)]",
    },
    createElement(SettingsNavbar, null),
    createElement(SettingsSidebar, null),
  );
}

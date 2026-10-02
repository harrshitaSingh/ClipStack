import { useState } from "react";
import type { ReactNode } from "react";
import { clips } from "../cardComponents/clipsDemoData";
import { Button } from "../../Button";
import { GeneralSettings } from "./GeneralSetting";

type SettingsSection = "General" | "Privacy" | "Shortcuts" | "Appearance" | "About";

const iconProps = {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0",
};

function GeneralIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function AppearanceIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

type SidebarItem = {
  label: SettingsSection;
  icon: () => ReactNode;
  page: typeof GeneralSettings;
};

const settingsItems: SidebarItem[] = [
  { label: "General", icon: GeneralIcon, page: GeneralSettings },
  { label: "Appearance", icon: AppearanceIcon, page: GeneralSettings },
  { label: "About", icon: AboutIcon, page: GeneralSettings },
];

export function SettingsSidebar() {
  const [selected, setSelected] = useState<SettingsSection>("General");
  const activeItem = settingsItems.find((item) => item.label === selected);
  const Panel = activeItem?.page;

  return (
    <div className="mt-3 flex min-w-0 items-stretch gap-2">
      <nav aria-label="Settings" className="flex w-[104px] shrink-0 flex-col gap-0.5">
        {settingsItems.map((item) => {
          const isActive = item.label === selected;

          return (
            <Button
              key={item.label}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "flex w-full min-w-0 cursor-pointer items-center gap-1.5 rounded-xl bg-[#ece8ff] px-2 py-2 text-left text-[12px] font-semibold text-[#5b4ef0]"
                  : "flex w-full min-w-0 cursor-pointer items-center gap-1.5 rounded-xl px-2 py-2 text-left text-[12px] font-medium text-[#7a8394] hover:bg-white"
              }
              onClick={() => {
                setSelected(item.label);
              }}
            >
              <item.icon />
              <span className="min-w-0 truncate">{item.label}</span>
            </Button>
          );
        })}
      </nav>
      <div className="min-h-[280px] min-w-0 flex-1 overflow-hidden rounded-[22px] bg-white p-2">
        {Panel ? <Panel clips={clips} /> : null}
      </div>
    </div>
  );
}

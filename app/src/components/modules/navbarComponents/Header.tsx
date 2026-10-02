import { LogoIcon } from "../../icons/LogoIcon";
import { MoreButton } from "./MoreButton";
import { SearchButton } from "./search/SearchButton";
import { SettingsButton } from "./settings/SettingsButton";

export function Header() {
  return (
    <header className="mb-3 flex items-start justify-between">
      <div className="flex items-center gap-2.5">
        <LogoIcon />
        <div>
          <h1 className="text-[18px] leading-5 font-bold text-[#1d2433]">ClipStack</h1>
          <p className="mt-0.5 text-[11px] text-[#9aa3b5]">Everything you copy, always with you</p>
        </div>
      </div>
      <div className="flex items-center gap-1 pt-1">
        <SearchButton />
        <SettingsButton />
        <MoreButton />
      </div>
    </header>
  );
}

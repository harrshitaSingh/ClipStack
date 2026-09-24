import { createElement } from "react";
import type { ReactNode } from "react";
import { Button } from "../../Button";

type FilterChipProps = {
  label: string;
  count: number;
  icon?: ReactNode;
  active?: boolean;
};

export function FilterChip({ label, count, icon, active = false }: FilterChipProps) {
  const chipClass = active
    ? "flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#6d5efc] px-2.5 py-1.5 text-[11.5px] font-semibold text-white"
    : "flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#f3f5fa] px-2.5 py-1.5 text-[11.5px] font-medium text-[#6b7385] hover:bg-[#e9edf5]";

  const countClass = active
    ? "rounded-full bg-white/25 px-1.5 py-px text-[10px]"
    : "rounded-full bg-[#e7ebf3] px-1.5 py-px text-[10px] text-[#8b93a7]";

  return createElement(
    Button,
    { className: chipClass },
    icon,
    label,
    createElement("span", { className: countClass }, count)
  );
}

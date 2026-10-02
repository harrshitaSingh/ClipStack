import { LinkIcon } from "../../icons/LinkIcon";
import { FilterChip } from "./FilterChip.tsx";

export function FilterBar() {
  return (
    <div className="mb-3 flex flex-nowrap gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <FilterChip label="All" count={12} active />
      <FilterChip label="Text" count={8} />
      <FilterChip label="Links" count={2} icon={<LinkIcon size={12} />} />
      <FilterChip label="Code" count={2} icon={<span className="text-[11px]">{"</>"}</span>} />
    </div>
  );
}

import { createElement } from "react";
import { ClipCard } from "../cardComponents/ClipCard";
import type { Clip } from "../../../types/clip";

type ClipListProps = {
  clips: Clip[];
};

export function GeneralSettings({ clips }: ClipListProps) {
  return createElement(
    "ul",
    { className: "flex min-w-0 flex-col gap-1.5 overflow-hidden" },
    clips.map((clip) => createElement(ClipCard, { key: clip.id, clip, compact: true })),
  );
}

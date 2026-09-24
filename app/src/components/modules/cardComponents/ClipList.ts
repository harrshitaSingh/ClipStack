import { createElement } from "react";
import { ClipCard } from "./ClipCard";
import type { Clip } from "../../../types/clip";

type ClipListProps = {
  clips: Clip[];
};

export function ClipList({ clips }: ClipListProps) {
  return createElement(
    "ul",
    { className: "flex flex-col gap-2" },
    clips.map((clip) => createElement(ClipCard, { key: clip.id, clip }))
  );
}

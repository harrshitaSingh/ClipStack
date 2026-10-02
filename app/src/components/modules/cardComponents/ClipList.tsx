import type { Clip } from "./types";
import { ClipCard } from "./ClipCard";

type ClipListProps = {
  clips: Clip[];
};

export function ClipList({ clips }: ClipListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {clips.map((clip) => (
        <ClipCard key={clip.id} clip={clip} />
      ))}
    </ul>
  );
}

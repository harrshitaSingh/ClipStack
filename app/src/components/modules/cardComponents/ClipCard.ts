import { createElement } from "react";
import { CopyButton } from "./CopyButton";
import { ClipTypeBadge } from "./ClipTypeBadge";
import { StarButton } from "./StarButton";
import { Button } from "../../Button";
import type { Clip } from "../../../types/clip";

type ClipCardProps = {
  clip: Clip;
  compact?: boolean;
};

export function ClipCard({ clip, compact = false }: ClipCardProps) {
  const titleClass = compact
    ? "overflow-hidden text-[11px] leading-4 font-medium text-[#2a3142] text-ellipsis whitespace-nowrap"
    : clip.kind === "code"
      ? "text-[12.5px] leading-5 font-medium text-[#2a3142] line-clamp-3"
      : "text-[12.5px] leading-5 font-medium text-[#2a3142] truncate";

  return createElement(
    "li",
    {
      className: compact
        ? "flex min-w-0 items-start overflow-hidden rounded-2xl border border-[#eef1f6] bg-white"
        : "flex min-w-0 items-start overflow-hidden rounded-2xl border border-[#eef1f6] bg-white hover:border-[#e4e8f2] hover:bg-[#fbfcff]",
    },
    createElement(
      Button,
      {
        className: compact
          ? "flex min-w-0 flex-1 cursor-pointer items-start gap-2 overflow-hidden px-2 py-2 text-left"
          : "flex min-w-0 flex-1 cursor-pointer items-start gap-2.5 overflow-hidden px-3 py-2.5 text-left",
      },
      createElement(ClipTypeBadge, { kind: clip.kind, compact }),
      createElement(
        "div",
        { className: "min-w-0 flex-1 overflow-hidden" },
        createElement("p", { className: titleClass }, clip.title),
        clip.subtitle && !compact
          ? createElement("p", { className: "truncate text-[11px] text-[#9aa3b5]" }, clip.subtitle)
          : null,
        createElement(
          "p",
          { className: compact ? "mt-0.5 truncate text-[10px] text-[#b0b7c6]" : "mt-0.5 text-[10.5px] text-[#b0b7c6]" },
          clip.meta,
        ),
      ),
    ),
    createElement(
      "div",
      {
        className: compact
          ? "flex shrink-0 flex-col items-end gap-1 py-2 pr-2"
          : "flex shrink-0 flex-col items-end gap-2 py-2.5 pr-3",
      },
      createElement(StarButton, { filled: clip.starred }),
      createElement(CopyButton, null),
    ),
  );
}

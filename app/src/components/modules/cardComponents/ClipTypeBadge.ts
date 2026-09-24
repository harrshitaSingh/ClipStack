import { createElement } from "react";
import { CodeIcon } from "../../icons/CodeIcon";
import { ImageKindPreview } from "../../icons/ImageKindPreview";
import { LinkIcon } from "../../icons/LinkIcon";
import { TextIcon } from "../../icons/TextIcon";
import type { ClipKind } from "../../../types/clip";

type ClipTypeBadgeProps = {
  kind: ClipKind;
  compact?: boolean;
};

const typeBadgeStyles: Record<ClipKind, string> = {
  code: "bg-[#eee9ff] text-[#7a63f6]",
  link: "bg-[#e8f3ff] text-[#4f8cff]",
  text: "bg-[#fff4d6] text-[#e2b43a]",
  image: "bg-[#eef1f6] text-[#8b93a7]",
};

export function ClipTypeBadge({ kind, compact = false }: ClipTypeBadgeProps) {
  const icon =
    kind === "code"
      ? createElement(CodeIcon, null)
      : kind === "link"
        ? createElement(LinkIcon, null)
        : kind === "text"
          ? createElement(TextIcon, null)
          : createElement(ImageKindPreview, null);

  const sizeClass = compact
    ? "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg"
    : "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl";

  return createElement(
    "div",
    {
      className: `${sizeClass} ${typeBadgeStyles[kind]}`,
    },
    icon
  );
}

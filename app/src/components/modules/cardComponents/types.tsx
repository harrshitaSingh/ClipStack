import type { ReactNode } from "react";

export type ClipKind = "code" | "link" | "text" | "image";

export type Clip = {
  id: string;
  kind: ClipKind;
  title: ReactNode;
  subtitle?: string;
  meta: string;
  starred: boolean;
};

export type FilterId = "all" | "text" | "links" | "code";

export type FilterChipData = {
  id: FilterId;
  label: string;
  count: number;
  icon?: ReactNode;
  active?: boolean;
};

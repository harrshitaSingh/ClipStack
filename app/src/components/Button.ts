import { createElement } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export function Button({
  children,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return createElement("button", { ...props, type, className }, children);
}

import { Button } from "../../Button";
import { CopyIcon } from "../../icons/CopyIcon";

export function CopyButton() {
  return (
    <Button
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#6d5efc] hover:bg-[#5d4ef0]"
      aria-label="Copy"
    >
      <CopyIcon />
    </Button>
  );
}

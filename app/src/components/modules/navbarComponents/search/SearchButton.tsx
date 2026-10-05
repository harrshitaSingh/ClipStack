import { Button } from "../../../Button";
import { SearchIcon } from "../../../icons/SearchIcon";

type SearchButtonProps = {
  open: boolean;
  onClick: () => void;
};

export function SearchButton({ open, onClick }: SearchButtonProps) {
  return (
    <Button
      className={
        open
          ? "cursor-pointer rounded-lg bg-[#f4f6fb] p-1.5"
          : "cursor-pointer rounded-lg p-1.5 hover:bg-[#f4f6fb]"
      }
      aria-label="Search"
      aria-expanded={open}
      onClick={onClick}
    >
      <SearchIcon />
    </Button>
  );
}

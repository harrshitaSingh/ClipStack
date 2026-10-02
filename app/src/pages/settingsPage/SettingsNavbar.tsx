import { useNavigate } from "@tanstack/react-router";
import { Button } from "../../components/Button";
import { BackIcon } from "../../components/icons/BackIcon";
import { CloseIcon } from "../../components/icons/CloseIcon";
import { LogoIcon } from "../../components/icons/LogoIcon";

export function SettingsNavbar() {
  const navigate = useNavigate();

  const goHome = () => {
    void navigate({ to: "/" });
  };

  return (
    <header className="flex items-center justify-between">
      <div className="flex min-w-0 items-center gap-1">
        <Button
          className="cursor-pointer rounded-lg p-1.5 text-[#3c4456] hover:bg-[#f4f6fb]"
          aria-label="Back"
          onClick={goHome}
        >
          <BackIcon />
        </Button>
        <div className="flex min-w-0 items-center gap-2.5">
          <LogoIcon />
          <div className="min-w-0">
            <h1 className="text-[18px] leading-5 font-bold text-[#1d2433]">ClipStack</h1>
            <p className="mt-0.5 truncate text-[12px] text-[#8b93a7]">Customize your experience</p>
          </div>
        </div>
      </div>
      <Button
        className="cursor-pointer rounded-lg p-1.5 text-[#3c4456] hover:bg-[#f4f6fb]"
        aria-label="Close"
        onClick={goHome}
      >
        <CloseIcon />
      </Button>
    </header>
  );
}

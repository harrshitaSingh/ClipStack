import { Button } from "../../Button"
import { LogoIcon } from "../../icons/LogoIcon"
import { aboutSettings } from "./settingsDemoData"

function ActionIcon({ id }: { id: string }) {
  if (id === "updates") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 1 1-2.2-5.8" strokeLinecap="round" />
        <path d="M21 4v5h-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (id === "changelog") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 3h8l4 4v14H7z" strokeLinejoin="round" />
        <path d="M15 3v4h4M9 13h6M9 17h6" strokeLinecap="round" />
      </svg>
    )
  }

  if (id === "feedback") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 16l-2 4 4-2h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v4a4 4 0 0 0 2 3.5z" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3.6l2.2 4.6 5 .7-3.6 3.5.9 5L12 15.2 7.5 17.4l.9-5L4.8 8.9l5-.7L12 3.6z" strokeLinejoin="round" />
    </svg>
  )
}

export function AboutSettings() {
  return (
    <div className="flex min-h-full min-w-0 flex-1 flex-col justify-between gap-2">
      <div className="px-1 pb-1">
        <h2 className="text-[16px] leading-5 font-bold text-[#1d2433]">{aboutSettings.title}</h2>
        <p className="mt-0.5 text-[11px] leading-4 text-[#8b93a7]">{aboutSettings.description}</p>
      </div>
      <div className="flex items-start gap-2 rounded-2xl border border-[#e8ebf2] bg-white px-2.5 py-2.5">
        <LogoIcon />
        <div className="min-w-0">
          <p className="text-[15px] font-bold text-[#1d2433]">{aboutSettings.app.name}</p>
          <p className="text-[11px] text-[#8b93a7]">{aboutSettings.app.version}</p>
          <p className="mt-1.5 text-[11px] leading-4 text-[#5c6578]">{aboutSettings.app.summary}</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#e8ebf2] bg-white">
        {aboutSettings.actions.map((action) => (
          <Button
            key={action.id}
            className="flex w-full items-center gap-2 border-b border-[#f0f2f7] px-2.5 py-2.5 text-left last:border-b-0 hover:bg-[#fbfcff]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f3f5fa] text-[#5c6578]">
              <ActionIcon id={action.id} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[12px] leading-4 font-semibold text-[#1d2433]">{action.title}</span>
              <span className="mt-0.5 block text-[10px] leading-[14px] text-[#8b93a7]">{action.description}</span>
            </span>
            <span className="text-[18px] font-light text-[#c5cad6]">›</span>
          </Button>
        ))}
      </div>
      <p className="px-1 pt-1 text-[13px] font-semibold text-[#1d2433]">{aboutSettings.legalTitle}</p>
      <div className="overflow-hidden rounded-2xl border border-[#e8ebf2] bg-white">
        {aboutSettings.legal.map((link) => (
          <Button
            key={link.id}
            className="flex w-full items-center justify-between gap-2 border-b border-[#f0f2f7] px-2.5 py-2.5 text-left text-[12px] text-[#1d2433] last:border-b-0 hover:bg-[#fbfcff]"
          >
            {link.title}
            <span className="text-[18px] font-light text-[#c5cad6]">›</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

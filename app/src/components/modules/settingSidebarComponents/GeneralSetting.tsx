import { useState } from "react"
import { Button } from "../../Button"
import { TrashIcon } from "../../icons/TrashIcon"
import {
  generalSettings,
  type GeneralSettingItem,
} from "./settingsDemoData"

function Toggle({ pressed }: { pressed: boolean }) {
  return (
    <span
      className={
        pressed
          ? "relative h-6 w-11 shrink-0 rounded-full bg-[#4f6bff]"
          : "relative h-6 w-11 shrink-0 rounded-full bg-[#d5dbe8]"
      }
    >
      <span
        className={
          pressed
            ? "absolute top-0.5 left-5 h-5 w-5 rounded-full bg-white shadow-sm"
            : "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm"
        }
      />
    </span>
  )
}

function SettingTitle({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <span className="min-w-0 flex-1 text-left">
      <span className="block text-[12px] leading-4 font-semibold text-[#1d2433]">{title}</span>
      {description ? (
        <span className="mt-0.5 block text-[10px] leading-[14px] text-[#8b93a7]">{description}</span>
      ) : null}
    </span>
  )
}

function GeneralItem({ item }: { item: GeneralSettingItem }) {
  const [enabled, setEnabled] = useState(item.kind === "toggle" ? item.enabled : false)
  const [markIndex, setMarkIndex] = useState(
    item.kind === "slider" ? Math.max(item.marks.indexOf(item.value), 0) : 0,
  )

  if (item.kind === "toggle") {
    return (
      <Button
        className="flex w-full items-center gap-2 rounded-2xl border border-[#e8ebf2] bg-white px-2.5 py-2.5 text-left hover:bg-[#fbfcff]"
        aria-pressed={enabled}
        onClick={() => setEnabled((current) => !current)}
      >
        <SettingTitle title={item.title} description={item.description} />
        <Toggle pressed={enabled} />
      </Button>
    )
  }

  if (item.kind === "slider") {
    const current = item.marks[markIndex] ?? item.value

    return (
      <div className="rounded-2xl border border-[#e8ebf2] bg-white px-2.5 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="min-w-0 text-[12px] leading-4 font-semibold text-[#1d2433]">{item.title}</span>
          <span className="shrink-0 rounded-md border border-[#e8ebf2] px-1.5 py-0.5 text-[11px] font-semibold text-[#1d2433]">
            {current}
          </span>
        </div>
        <p className="mt-0.5 text-[10px] leading-[14px] text-[#8b93a7]">{item.description}</p>
        <input
          className="mt-2 w-full accent-[#4f6bff]"
          type="range"
          min={0}
          max={item.marks.length - 1}
          step={1}
          value={markIndex}
          aria-label={item.title}
          onChange={(event) => setMarkIndex(Number(event.target.value))}
        />
        <div className="mt-1 flex justify-between text-[9px] text-[#9aa3b5]">
          {item.marks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Button className="flex w-full items-center gap-2 rounded-2xl bg-[#fff1f3] px-2.5 py-2.5 text-left hover:bg-[#ffe4e8]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ffe1e5] text-[#f07178]">
        <TrashIcon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[12px] leading-4 font-semibold text-[#e85d68]">{item.title}</span>
        <span className="mt-0.5 block text-[10px] leading-[14px] text-[#b8787e]">{item.description}</span>
      </span>
      <span className="shrink-0 text-[20px] font-light text-[#d88990]">›</span>
    </Button>
  )
}

export function GeneralSettings() {
  return (
    <div className="flex min-h-full min-w-0 flex-1 flex-col justify-between gap-2">
      <div className="px-1 pb-1">
        <h2 className="text-[16px] leading-5 font-bold text-[#1d2433]">{generalSettings.title}</h2>
        <p className="mt-0.5 text-[11px] leading-4 text-[#8b93a7]">{generalSettings.description}</p>
      </div>
      {generalSettings.items.map((item) => (
        <GeneralItem key={item.id} item={item} />
      ))}
    </div>
  )
}

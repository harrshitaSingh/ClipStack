import { useState } from "react"
import { Button } from "../../Button"
import {
  appearanceSettings,
  type AppearanceSettingItem,
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

function AppearanceItem({ item }: { item: AppearanceSettingItem }) {
  const [selected, setSelected] = useState(
    item.kind === "choice" ? item.selected : item.kind === "colors" ? item.selected : "",
  )
  const [enabled, setEnabled] = useState(item.kind === "toggle" ? item.enabled : false)

  if (item.kind === "toggle") {
    return (
      <Button
        className="flex w-full items-center gap-2 rounded-2xl border border-[#e8ebf2] bg-white px-2.5 py-2.5 text-left hover:bg-[#fbfcff]"
        aria-pressed={enabled}
        onClick={() => setEnabled((current) => !current)}
      >
        <span className="min-w-0 flex-1">
          <span className="block text-[12px] leading-4 font-semibold text-[#1d2433]">{item.title}</span>
          {item.description ? (
            <span className="mt-0.5 block text-[10px] leading-[14px] text-[#8b93a7]">
              {item.description}
            </span>
          ) : null}
        </span>
        <Toggle pressed={enabled} />
      </Button>
    )
  }

  return (
    <div className="rounded-2xl border border-[#e8ebf2] bg-white px-2.5 py-2.5">
      <div>
        <span className="block text-[12px] leading-4 font-semibold text-[#1d2433]">{item.title}</span>
        {item.description ? (
          <span className="mt-0.5 block text-[10px] leading-[14px] text-[#8b93a7]">{item.description}</span>
        ) : null}
      </div>
      {item.kind === "choice" ? (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.options.map((option) => (
            <Button
              key={option}
              className={
                option === selected
                  ? "rounded-lg bg-[#4f6bff] px-1.5 py-1 text-[10px] font-semibold whitespace-nowrap text-white"
                  : "rounded-lg bg-[#f3f5fa] px-1.5 py-1 text-[10px] font-medium whitespace-nowrap text-[#5c6578] hover:bg-[#e9edf5]"
              }
              onClick={() => setSelected(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      ) : null}
      {item.kind === "colors" ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.colors.map((color) => (
            <Button
              key={color.id}
              aria-label={color.id}
              className={
                color.id === selected
                  ? "h-7 w-7 rounded-full ring-2 ring-[#4f6bff] ring-offset-2"
                  : "h-7 w-7 rounded-full"
              }
              style={{ backgroundColor: color.value }}
              onClick={() => setSelected(color.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function AppearanceSettings() {
  return (
    <div className="flex min-h-full min-w-0 flex-1 flex-col justify-between gap-2">
      <div className="px-1 pb-1">
        <h2 className="text-[16px] leading-5 font-bold text-[#1d2433]">{appearanceSettings.title}</h2>
        <p className="mt-0.5 text-[11px] leading-4 text-[#8b93a7]">{appearanceSettings.description}</p>
      </div>
      {appearanceSettings.items.map((item) => (
        <AppearanceItem key={item.id} item={item} />
      ))}
    </div>
  )
}

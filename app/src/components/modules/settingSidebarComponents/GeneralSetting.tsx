import type { SettingsClip } from '../settingCardComponents/types'
import { SettingCard } from '../settingCardComponents/settingCard'
import { ClearAllButton } from '../footerComponents/ClearAllButton'

type ClipListProps = {
  clips: SettingsClip[]
}

export function GeneralSettings({ clips }: ClipListProps) {
  return (
    <ul className="flex min-w-0 flex-col gap-1.5 overflow-hidden">
      <span className="min-w-0 flex-1">
        <span className="block text-[20px] font-bold text-[#00000]">
          General
        </span>
        <span className="mt-0.5 block text-[11px] text-[#9aa3b5] leading-4">
          Configure how ClipStack works for you
        </span>
      </span>
      {clips.map((clip) => (
        <SettingCard key={clip.id} clip={clip} />
      ))}
      <ClearAllButton compact />
    </ul>
  )
}

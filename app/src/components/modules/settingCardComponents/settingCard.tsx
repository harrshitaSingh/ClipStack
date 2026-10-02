import type { SettingsClip } from './types'
import { Button } from '../../Button'

type ClipCardProps = {
  clip: SettingsClip
}

export function SettingCard({ clip }: ClipCardProps) {
  const titleClass =
    'overflow-hidden text-[11px] leading-4 font-medium text-[#2a3142] text-ellipsis whitespace-nowrap'

  return (
    <li
      className={
        'flex min-w-0 items-start overflow-hidden rounded-2xl border border-[#eef1f6] bg-white hover:border-[#e4e8f2] hover:bg-[#fbfcff]'
      }
    >
      <Button
        className={
          'flex min-w-0 flex-1 cursor-pointer items-start gap-2.5 overflow-hidden px-3 py-2.5 text-left'
        }
      >
        <div className="min-w-0 flex-1 overflow-hidden">
          <p className={titleClass}>{clip.title}</p>
          {clip.subtitle ? (
            <p className="truncate text-[11px] text-[#9aa3b5]">
              {clip.subtitle}
            </p>
          ) : null}
          <p className={'mt-0.5 text-[10.5px] text-[#b0b7c6]'}>{clip.meta}</p>
        </div>
      </Button>
    </li>
  )
}

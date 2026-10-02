import { Button } from '../../Button'
import { TrashIcon } from '../../icons/TrashIcon'
import type { ClearAllButtonProps } from './types'

export function ClearAllButton({ compact = false }: ClearAllButtonProps) {
  return (
    <Button
      className={
        compact
          ? 'flex w-full items-center gap-3 rounded-2xl bg-[#fff1f2] px-1 py-2 text-left hover:bg-[#ffe4e6]'
          : 'flex cursor-pointer items-center gap-1 rounded-lg bg-[#fff1f2] px-2.5 py-1.5 text-[12px] font-medium text-[#f07178] hover:bg-[#ffe4e6]'
      }
    >
      {compact ? (
        <>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ffe1e5] text-[#f07178]">
            <TrashIcon />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-semibold text-[#e85d68]">
              Clear all history
            </span>

            <span className="mt-0.5 block text-[11px] leading-4 text-[#b8787e]">
              This will permanently delete all your saved items
            </span>
          </span>

          <span className="shrink-0 text-[20px] font-light text-[#d88990]">
            ›
          </span>
        </>
      ) : (
        <>
          <TrashIcon />
          <span>Clear all</span>
        </>
      )}
    </Button>
  )
}
import { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../../icons/SearchIcon'

type SearchBarProps = {
  onClose: () => void
}

export function SearchBar({ onClose }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleInputChange = () => {
    //  if (event.key === "Escape") {
    //         onClose();
    //       }

    const delaySearch = setTimeout(() => {
      console.log('serach')
    }, 3000)

    return () => clearTimeout(delaySearch)
  }

  return (
    <label className="mt-3 flex items-center gap-2 rounded-xl bg-[#f3f5fa] px-3 py-2">
      <SearchIcon />
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        aria-label="Search clips"
        onChange={handleInputChange}
        className="min-w-0 flex-1 bg-transparent text-[13px] text-[#1d2433] outline-none placeholder:text-[#9aa3b5] [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
      />
      <span className="flex shrink-0 items-center gap-1 text-[11px] font-medium text-[#8b93a7]">
        <kbd className="rounded-md bg-white px-1.5 py-0.5 shadow-[0_1px_2px_rgba(30,40,70,0.08)]">
          ⌘
        </kbd>
        <kbd className="rounded-md bg-white px-1.5 py-0.5 shadow-[0_1px_2px_rgba(30,40,70,0.08)]">
          K
        </kbd>
      </span>
    </label>
  )
}

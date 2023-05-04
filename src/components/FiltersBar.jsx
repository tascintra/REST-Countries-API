import FilterSelect from "@/components/Filters/FilterSelect";
import { TextInput } from '@/components/Filters/TextInput'
import { MagnifyingGlass } from '@phosphor-icons/react'

const FiltersBar = () => {
  return (
    <div className="h-36 px-16 py-40 flex items-center gap-5 justify-between">
      <TextInput.Root>
        <TextInput.Icon>
          <MagnifyingGlass weight="bold" />
        </TextInput.Icon>
        <TextInput.Input type="text" placeholder="Search for a country..." />
      </TextInput.Root>
      <FilterSelect />
    </div>
  )
}

export default FiltersBar

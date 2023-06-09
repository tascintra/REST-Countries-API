import PropTypes from "prop-types"
import { MagnifyingGlass } from "@phosphor-icons/react"
import FilterSelect from "@/components/Filters/FilterSelect"
import { TextInput } from "@/components/Filters/TextInput"

const FiltersBar = ({ query, filter, filterItems }) => {
  return (
    <section className="flex h-36 flex-wrap items-center justify-between gap-12 pb-52 pt-32 md:flex-nowrap md:gap-5 md:pb-20 md:pt-40">
      <TextInput.Root>
        <TextInput.Icon>
          <MagnifyingGlass weight="bold" />
        </TextInput.Icon>
        <TextInput.Input
          onChange={(e) => query(e.target.value)}
          type="text"
          placeholder="Search for a country..."
        />
      </TextInput.Root>
      <FilterSelect
        filter={filter}
        filterItems={filterItems}
      />
    </section>
  )
}

FiltersBar.propTypes = {
  filterRegions: PropTypes.func,
  query: PropTypes.func,
  filter: PropTypes.func,
  filterItems: PropTypes.array,
}

export default FiltersBar

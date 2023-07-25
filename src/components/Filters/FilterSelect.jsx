import { useContext } from "react"
import { ThemeContext } from "@/ThemeContext"
import PropTypes from "prop-types"
import Select from "react-select"

const FilterSelect = ({ filter, filterItems }) => {
  const { darkTheme } = useContext(ThemeContext)

  const options = filterItems.map((item) => {
    return {
      value: item.toLowerCase(),
      label: item,
    }
  })

  const lightPrim = getComputedStyle(document.documentElement).getPropertyValue(
    "--gray-200"
  )
  const lightSec = "#f2f2f2"
  const lightTer = "#858585"

  const darkPrim = getComputedStyle(document.documentElement).getPropertyValue(
    "--blue-100"
  )
  const darkSec = "#2b3945"
  const darkTer = "#4a5864"

  const shadowComponents = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--shadow-components")
  const shadowSelected = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--shadow-selected")
  const shadowDarkSelected = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--shadow-dark-selected")

  const style = {
    control: (base, state) => ({
      ...base,
      fontSize: "0.875rem",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused
        ? darkTheme
          ? `${shadowDarkSelected}`
          : `${shadowSelected}`
        : `${shadowComponents}`,
      padding: "10px 6px 10px 14px",
      borderRadius: "6px",
      backgroundColor: darkTheme ? `${darkSec}` : "#fff",
      "&:hover": {
        boxShadow: darkTheme ? `${shadowDarkSelected}` : `${shadowSelected}`,
      },
    }),
    clearIndicator: (base, state) => ({
      ...base,
      color: darkTheme && (state.isSelected ? "#fff" : "#fff"),
      cursor: "pointer",
      "&:hover": {
        color: darkTheme
          ? state.isSelected
            ? "#8799a8"
            : "#8799a8"
          : `${lightTer}`,
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
      "&:hover": {
        color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
      },
    }),
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: darkTheme ? `${darkSec}` : "#fff",
        border: "none",
        borderRadius: "6px",
        top: "52px",
        color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
        boxShadow: darkTheme ? `${shadowDarkSelected}` : `${shadowSelected}`,
      }
    },
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontSize: "0.875rem",
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? darkTheme
            ? "#1b272d"
            : `${lightTer}`
          : isFocused
          ? undefined
          : undefined,

        "&:hover": {
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? darkTheme
              ? `${darkPrim}`
              : `${lightTer}`
            : isFocused
            ? darkTheme
              ? `${darkTer}`
              : `${lightSec}`
            : undefined,
        },

        "&:hover:active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? darkTheme
                ? `${darkTer}`
                : `${lightSec}`
              : darkTheme
              ? `${darkPrim}`
              : "#525252"
            : undefined,
          color: darkTheme ? "#fff" : `${lightSec}`,
        },
        paddingLeft: "24px",
      }
    },
    singleValue: (styles) => {
      return {
        ...styles,
        color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
      }
    },
  }

  return (
    <div className="w-full max-w-mxs md:max-w-sxs">
      <Select
        instanceId="regions"
        placeholder="Filter by Region"
        options={options}
        defaultValue={" "}
        styles={style}
        components={{
          IndicatorSeparator: () => null,
        }}
        isSearchable={false}
        isClearable
        onChange={(e) => {
          filter(e?.value)
        }}
      />
    </div>
  )
}

FilterSelect.propTypes = {
  filter: PropTypes.func,
  filterItems: PropTypes.array,
}

export default FilterSelect

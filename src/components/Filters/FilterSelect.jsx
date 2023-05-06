import { useContext, useState } from 'react'
import { ThemeContext } from '@/ThemeContext'
import Select from 'react-select'

const options = [
  {
    value: 'africa',
    label: 'Africa',
  },
  {
    value: 'america',
    label: 'America',
  },
  {
    value: 'asia',
    label: 'Asia',
  },
  {
    value: 'europe',
    label: 'Europe',
  },
  {
    value: 'oceania',
    label: 'Oceania',
  },
]

const FilterSelect = () => {
  const { darkTheme } = useContext(ThemeContext)

  const lightPrim = getComputedStyle(document.documentElement).getPropertyValue(
    '--gray-200'
  )
  const lightSec = '#f2f2f2'
  const lightTer = '#858585'

  const darkPrim = getComputedStyle(document.documentElement).getPropertyValue(
    '--blue-100'
  )
  const darkSec = '#2b3945'
  const darkTer = '#4a5864'

  const shadowComponents = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--shadow-components')
  const shadowSelected = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--shadow-selected')
  const shadowDarkSelected = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--shadow-dark-selected')

  const style = {
    control: (base, state) => ({
      ...base,
      fontSize: '0.875rem',
      border: state.isFocused ? 'none' : 'none',
      boxShadow: state.isFocused
        ? darkTheme
          ? `${shadowDarkSelected}`
          : `${shadowSelected}`
        : `${shadowComponents}`,
      padding: '10px 6px 10px 14px',
      borderRadius: '6px',
      transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1)',
      width: '12.5rem',
      backgroundColor: darkTheme ? `${darkSec}` : '#fff',
      '&:hover': {
        boxShadow: darkTheme ? `${shadowDarkSelected}` : `${shadowSelected}`,
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
      '&:hover': {
        color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
      },
    }),
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: darkTheme ? `${darkSec}` : '#fff',
        boxShadow: `${shadowComponents}`,
        border: 'none',
        borderRadius: '6px',
        top: '60px',
        color: darkTheme ? `${lightPrim}` : `${darkPrim}`,
      }
    },
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? darkTheme
            ? '#1b272d'
            : `${lightTer}`
          : isFocused
          ? undefined
          : undefined,

        '&:hover': {
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

        '&:hover:active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? darkTheme
                ? `${darkTer}`
                : `${lightSec}`
              : darkTheme
              ? `${darkPrim}`
              : '#525252'
            : undefined,
          color: darkTheme ? '#fff' : `${lightSec}`,
        },
        paddingLeft: '24px',
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
    <Select
      instanceId="regions"
      placeholder="Filter by Region"
      options={options}
      styles={style}
      components={{
        IndicatorSeparator: () => null,
      }}
      isSearchable={false}
      isClearable={true}
    />
  )
}

export default FilterSelect

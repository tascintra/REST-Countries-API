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
  {
    value: 'all',
    label: 'All',
  },
]

const FilterSelect = () => {
  const { darkTheme } = useContext(ThemeContext)

  const style = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 'none' : 'none',
      boxShadow: state.isFocused
        ? '0px 0px 16px #00000013'
        : '0px 0px 8px #00000013',
      padding: '10px 6px 10px 14px',
      borderRadius: '6px',
      transition: 'all 500ms',
      width: '12.5rem',
      backgroundColor: darkTheme ? '#2b3945' : '#fff',
    }),
    placeholder: (styles) => ({
      ...styles,
      color: darkTheme ? '#fafafa' : '#111517',
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: darkTheme ? '#fafafa' : '#111517',
      '&:hover': {
        color: darkTheme ? '#fafafa' : '#111517',
      },
    }),
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: darkTheme ? '#2b3945' : '#fff',
        boxShadow: '0px 0px 8px #00000013',
        border: 'none',
        borderRadius: '6px',
        top: '60px',
        color: darkTheme ? '#fafafa' : '#111517',
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
            : '#858585'
          : isFocused
          ? undefined
          : undefined,

        '&:hover': {
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? darkTheme
              ? '#111517'
              : '#858585'
            : isFocused
            ? darkTheme
              ? '#4a5864'
              : '#f2f2f2'
            : undefined,
        },

        '&:hover:active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? darkTheme
                ? '#4a5864'
                : '#f2f2f2'
              : darkTheme
              ? '#111517'
              : '#525252'
            : undefined,
          color: darkTheme ? '#fff' : '#f2f2f2',
        },
        paddingLeft: '24px',
      }
    },
    singleValue: (styles) => {
      return {
        ...styles,
        color: darkTheme ? '#fafafa' : '#111517',
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
    />
  )
}

export default FilterSelect

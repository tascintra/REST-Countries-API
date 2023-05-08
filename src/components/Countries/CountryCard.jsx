import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({
  flag,
  alt,
  country,
  population,
  region,
  capital,
  empty,
}) => {
  return empty ? (
    <div className="hidden lg:block lg:w-66 lg:h-84"></div>
  ) : (
    <Link
      to={`/country/${country}`}
      className="w-82 sm:w-66 h-104 sm:h-84 bg-white dark:bg-blue-300 dark:text-white rounded shadow-components overflow-hidden ring-white dark:ring-blue-300 hover:ring-1 hover:shadow-selected dark:hover:shadow-darkSelected hover:brightness-95 dark:hover:brightness-110 transition-[filter, shadow]"
    >
      <img
        src={flag}
        className="h-52 sm:h-40 w-full object-cover shadow-components"
        alt={alt}
      />
      <div className="flex flex-col gap-1 p-8 sm:p-6">
        <h3 className="text-2xl sm:text-lg font-semibold pb-2">{country}</h3>
        <p className="sm:text-body">
          <span className="sm:text-body font-semibold">Population: </span>
          {population?.toLocaleString('en-US')}
        </p>
        <p className="sm:text-body">
          <span className="sm:text-body font-semibold">Region: </span>
          {region}
        </p>
        <p className="sm:text-body">
          <span className="sm:text-body font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard

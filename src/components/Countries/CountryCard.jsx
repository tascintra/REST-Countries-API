import React from 'react'

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
    <div className="w-66 h-84 bg-white dark:bg-blue-300 dark:text-white rounded shadow-components overflow-hidden">
      <img
        src={flag}
        className="h-40 w-full object-cover shadow-components"
        alt={alt}
      />
      <div className="flex flex-col gap-1 p-6">
        <h3 className="text-lg font-semibold pb-2">{country}</h3>
        <p>
          <span className="font-semibold">Population: </span>
          {population?.toLocaleString('en-US')}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  )
}

export default CountryCard

import React from 'react'

const CountryCard = ({flag, alt, country, population, region, capital, empty}) => {
  

  return empty ? <div className="hidden lg:block lg:w-66 lg:h-84"></div> : (
    <div className="w-66 h-84 bg-white dark:bg-blue-300 dark:text-white rounded shadow-components overflow-hidden transition-all duration-500">
      <img
        src={flag}
        className="h-40 w-full object-cover"
        alt={alt}
      />
      <div className="flex flex-col p-6">
        <h3 className="text-lg font-semibold pb-2">{country}</h3>
        <p><span className="font-semibold text-[14px]">Population: </span>{population?.toLocaleString('en-US')}</p>
        <p><span className="font-semibold text-[14px]">Region: </span>{region}</p>
        <p><span className="font-semibold text-[14px]">Capital: </span>{capital}</p>
      </div>
    </div>
  )
}

export default CountryCard

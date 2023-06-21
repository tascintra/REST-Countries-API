import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Ink from "react-ink"

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
    <div className="hidden lg:block lg:h-84 lg:w-66"></div>
  ) : (
    <Link
      to={`/country/${country}`}
      className="transition-[filter, shadow] relative h-104 w-82 overflow-hidden rounded bg-white shadow-components ring-white hover:shadow-selected hover:ring-1 hover:brightness-95 dark:bg-blue-300 dark:text-white dark:ring-blue-300 dark:hover:shadow-darkSelected dark:hover:brightness-110 sm:h-84 sm:w-66"
    >
      <Ink recenter={false} duration={800} radius={348} opacity={0.15} />
      <img
        src={flag}
        className="h-52 w-full object-cover shadow-components sm:h-40"
        alt={alt}
      />
      <div className="flex flex-col gap-1 p-8 sm:p-6">
        <h3 className="pb-2 text-2xl font-semibold sm:text-lg">{country}</h3>
        <p className="sm:text-body">
          <span className="font-semibold sm:text-body">Population: </span>
          {population?.toLocaleString("en-US")}
        </p>
        <p className="sm:text-body">
          <span className="font-semibold sm:text-body">Region: </span>
          {region}
        </p>
        <p className="sm:text-body">
          <span className="font-semibold sm:text-body">Capital: </span>
          {capital}
        </p>
      </div>
    </Link>
  )
}

CountryCard.propTypes = {
  flag: PropTypes.string,
  alt: PropTypes.string,
  country: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.array,
  empty: PropTypes.bool,
}

export default CountryCard

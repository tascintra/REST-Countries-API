import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import CountryCard from "@/components/Countries/CountryCard"
import CardSkeleton from "@/components/Helper/CardSkeleton"
import Error from "@/components/Helper/Error"

const CountriesContainer = ({
  data,
  loading,
  error,
  skeleton,
  countries,
  search,
}) => {
  const [brokenList, setBrokenList] = useState(0)

  useEffect(() => {
    countries.length % 4 === 2 ? setBrokenList(2) : setBrokenList(3)
  }, [countries])

  return (
    <section
      className={`flex flex-wrap justify-center gap-12 md:justify-between lg:gap-y-16`}
    >
      {error && <Error error={error.response.data.message} />}
      {loading && skeleton.map((item) => <CardSkeleton key={item} />)}
      {data &&
        search(countries).map((country) => (
          <CountryCard
            key={country.name.common}
            flag={country.flags.png}
            alt={country.flags.alt}
            country={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital} // solve more than one capital
          />
        ))}
      {brokenList === 2 && (
        <>
          <CountryCard empty={true} />
          <CountryCard empty={true} />
        </>
      )}
      {brokenList === 3 && <CountryCard empty={true} />}
    </section>
  )
}

CountriesContainer.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  skeleton: PropTypes.array,
  countries: PropTypes.array,
  search: PropTypes.func,
}

export default CountriesContainer

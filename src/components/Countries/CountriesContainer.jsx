import { useEffect, useState } from 'react'
import useAxios from '@/hooks/useAxios'
import { GET_COUNTRIES } from '@/services/api'
import CountryCard from '@/components/Countries/CountryCard'

const CountriesContainer = () => {
  const [countries, setCountries] = useState([])
  const { data, requestData } = useAxios()

  useEffect(() => {
    requestData(GET_COUNTRIES)
  }, [requestData])

  useEffect(() => {
    data && setCountries(data)
  }, [data])

  return (
    <section className="flex flex-wrap justify-center md:justify-between gap-12 lg:gap-y-16">
      {data &&
        countries.length &&
        countries.map((country) => (
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
      {countries.length % 4 === 2 && (
        <>
          <CountryCard empty={true} />
          <CountryCard empty={true} />
        </>
      )}
      {countries.length % 4 === 3 && <CountryCard empty={true} />}
    </section>
  )
}

export default CountriesContainer

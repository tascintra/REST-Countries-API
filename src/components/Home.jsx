import { useEffect, useState } from "react"
import useAxios from "@/hooks/useAxios"
import { GET_COUNTRIES } from "@/services/api"
import FiltersBar from "@/components/Filters/FiltersBar"
import CountriesContainer from "@/components/Countries/CountriesContainer"

const Home = () => {
  const [countries, setCountries] = useState([])
  const [skeleton, setSkeleton] = useState([""])
  const { data, loading, error, requestData } = useAxios()

  useEffect(() => {
    setSkeleton([...Array(20).keys()].map((i) => i + 1))
    requestData(GET_COUNTRIES)
  }, [requestData])

  useEffect(() => {
    data && setCountries(data)
  }, [data])

  const countriesFilter = (name) => {
    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(name.toLowerCase())
    })
    name ? setCountries(filteredCountries) : data && setCountries(data)
  }

  const filterRegions = (region) => {
    const filteredRegion =
      region &&
      countries.filter((country) => {
        return country.region.toLowerCase().includes(region.toLowerCase())
      })
    region ? setCountries(filteredRegion) : data && setCountries(data)
  }

  return (
    <>
      <FiltersBar
        countriesFilter={countriesFilter}
        filterRegions={filterRegions}
      />
      <CountriesContainer
        data={data}
        loading={loading}
        error={error}
        skeleton={skeleton}
        countries={countries}
      />
    </>
  )
}

export default Home

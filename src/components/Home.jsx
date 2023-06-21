import { useEffect, useState } from "react"
import useAxios from "@/hooks/useAxios"
import { GET_COUNTRIES } from "@/services/api"
import FiltersBar from "@/components/Filters/FiltersBar"
import CountriesContainer from "@/components/Countries/CountriesContainer"

const Home = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")
  const [skeleton, setSkeleton] = useState([""])
  const { data, loading, error, requestData } = useAxios()

  useEffect(() => {
    setSkeleton([...Array(20).keys()].map((i) => i + 1))
    requestData(GET_COUNTRIES)
  }, [requestData])

  useEffect(() => {
    data && setCountries(data)
  }, [data])

  function search(countries) {
    return countries.filter((country) =>
      country.name.common.toString().toLowerCase().includes(query)
    )
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
      <FiltersBar query={setQuery} filterRegions={filterRegions} />
      <CountriesContainer
        search={search}
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

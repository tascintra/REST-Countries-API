import { useEffect, useState } from "react"
import useAxios from "@/hooks/useAxios"
import { GET_COUNTRIES } from "@/services/api"
import FiltersBar from "@/components/Filters/FiltersBar"
import CountriesContainer from "@/components/Countries/CountriesContainer"

const Home = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("")
  const [skeleton, setSkeleton] = useState([""])
  const { data, loading, error, requestData } = useAxios()

  const filterItems = [...new Set(countries.map((country) => country.region))]

  filterItems.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  useEffect(() => {
    setSkeleton([...Array(20).keys()].map((i) => i + 1))
    requestData(GET_COUNTRIES)
  }, [requestData])

  useEffect(() => {
    data && setCountries(data)
  }, [data])

  function search(countries) {
    return countries.filter(
      (country) =>
        (filter !== undefined &&
          country.region.toLowerCase().includes(filter) &&
          country.name.common.toString().toLowerCase().includes(query)) ||
        (filter === undefined &&
          country.name.common.toString().toLowerCase().includes(query))
    )
  }

  return (
    <>
      <FiltersBar
        query={setQuery}
        filter={setFilter}
        filterItems={filterItems}
      />
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

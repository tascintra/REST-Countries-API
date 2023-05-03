import React from 'react'
import Header from '@/components/Header'
import FiltersBar from '@/components/FiltersBar'
import CountryCard from "@/components/CountryCard";

const Home = () => {
  return (
    <>
      <FiltersBar />
      <CountryCard />
    </>
  )
}

export default Home

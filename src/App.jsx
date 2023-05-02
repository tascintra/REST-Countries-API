import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/components/Home'
import CountryCard from '@/components/CountryCard'
import Header from '@/components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<CountryCard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/components/Home'
import CountryCard from '@/components/CountryCard'
import Header from '@/components/Header'
import { DarkTheme } from '@/ThemeContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkTheme>
          <Header />
          <main className="max-w-8xl m-auto h-[200vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:id" element={<CountryCard />} />
            </Routes>
          </main>
        </DarkTheme>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DarkTheme } from "@/ThemeContext"
import Home from "@/components/Home"
import Header from "@/components/Header"
import CountryDetails from "@/components/Countries/CountryDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkTheme>
          <Header />
          <main className="m-auto min-h-screen max-w-8xl px-5 pb-16 md:px-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:id" element={<CountryDetails />} />
            </Routes>
          </main>
        </DarkTheme>
      </BrowserRouter>
    </>
  )
}

export default App

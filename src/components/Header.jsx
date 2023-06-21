import { useContext, useState } from "react"
import { Moon } from "@phosphor-icons/react"
import { ThemeContext } from "@/ThemeContext"
import { Link } from "react-router-dom"

const Header = () => {
  const [classname, setClassname] = useState("")
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const handleScroll = () => {
    window.scrollY >= 116
      ? setClassname("dark:bg-blue-300/50 bg-white/50")
      : setClassname("bg-white dark:bg-blue-300")
  }
  window.addEventListener("scroll", handleScroll)

  return (
    <header
      className={`shadow-bar dark:shadow-darkBar ${classname} fixed z-50 w-full text-blue-100 backdrop-blur-md transition-all duration-300 dark:text-white`}
    >
      <div className="m-auto flex h-24 max-w-8xl items-center justify-between px-5 sm:h-20 md:px-16">
        <Link reloadDocument to="/" className="text-base font-bold sm:text-2xl">
          Where in the world?
        </Link>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="flex items-center gap-2 text-body font-semibold sm:text-base"
        >
          <Moon weight={darkTheme ? "fill" : "bold"} /> Dark Mode
        </button>
      </div>
    </header>
  )
}

export default Header

import React, { useContext, useState } from 'react'
import { Moon } from '@phosphor-icons/react'
import { ThemeContext } from '@/ThemeContext'
import { Link } from "react-router-dom";

const Header = () => {
  const [classname, setClassname] = useState('')
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const handleScroll = () => {
    window.scrollY >= 116
      ? setClassname(
          'dark:bg-blue-300/50 bg-white/50'
        )
      : setClassname('bg-white dark:bg-blue-300')
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <header
      className={`shadow-bar dark:shadow-darkBar ${classname} text-blue-100 dark:text-white backdrop-blur-md transition-all duration-300 fixed w-full z-50`}
    >
      <div className="max-w-8xl h-24 sm:h-20 m-auto px-5 md:px-16 flex items-center justify-between">
        <Link reloadDocument to="/" className="text-base sm:text-2xl font-bold">Where in the world?</Link>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="flex items-center gap-2 font-semibold text-body sm:text-base"
        >
          <Moon weight={darkTheme ? 'fill' : 'bold'} /> Dark Mode
        </button>
      </div>
    </header>
  )
}

export default Header

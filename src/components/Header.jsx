import React, { useEffect, useState } from 'react'
import { Moon } from '@phosphor-icons/react'

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(
    window.localStorage.getItem('theme', 'dark')
  )
  const [classname, setClassname] = useState('')

  useEffect(() => {
    darkTheme
      ? (document.body.classList.add('dark'),
        window.localStorage.setItem('theme', 'dark'))
      : (document.body.classList.remove('dark'),
        window.localStorage.removeItem('theme', 'dark'))
  }, [darkTheme])

  const handleScroll = () => {
    window.scrollY >= 100
      ? setClassname(
          'dark:bg-blue-300/50 backdrop-blur-md bg-white/50 backdrop-blur-md'
        )
      : setClassname('bg-white dark:bg-blue-300')
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <header
      className={`shadow-bar dark:shadow-darkBar ${classname} text-blue-100 dark:text-white transition-all duration-500 fixed w-full`}
    >
      <div className="max-w-8xl h-20 m-auto px-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="flex items-center gap-2 font-semibold text-md"
        >
          <Moon weight={darkTheme ? 'fill' : 'bold'} /> Dark Mode
        </button>
      </div>
    </header>
  )
}

export default Header

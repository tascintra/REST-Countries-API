import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const DarkTheme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    window.localStorage.getItem('theme', 'dark')
  )

  useEffect(() => {
    darkTheme
      ? (document.body.classList.add('dark'),
        window.localStorage.setItem('theme', 'dark'))
      : (document.body.classList.remove('dark'),
        window.localStorage.removeItem('theme', 'dark'))
  }, [darkTheme])

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const DarkTheme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    window.localStorage.getItem('theme', 'dark')
  )

  useEffect(() => {
    console.log(document.documentElement)

    darkTheme
      ? (document.body.classList.add('dark'),
        window.localStorage.setItem('theme', 'dark'),
        document.documentElement.style.setProperty('--primary', 'var(--dark1)'),
        document.documentElement.style.setProperty(
          '--secondary',
          'var(--dark2)'
        ))
      : (document.body.classList.remove('dark'),
        window.localStorage.removeItem('theme', 'dark'),
        document.documentElement.style.setProperty(
          '--primary',
          'var(--light1)'
        ),
        document.documentElement.style.setProperty(
          '--secondary',
          'var(--light2)'
        ))
  }, [darkTheme])

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

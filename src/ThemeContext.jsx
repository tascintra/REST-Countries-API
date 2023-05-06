import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const DarkTheme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    window.localStorage.getItem('theme', 'dark')
  )

  useEffect(() => {
    darkTheme
      ? (document.body.classList.add('dark'),
        window.localStorage.setItem('theme', 'dark'),
        document.documentElement.style.setProperty('--primary', 'var(--dark-primary)'),
        document.documentElement.style.setProperty(
          '--secondary',
          'var(--dark-secondary)'
        ),
        document.documentElement.style.setProperty(
          '--hover',
          'var(--hover-dark)'
        ))
      : (document.body.classList.remove('dark'),
        window.localStorage.removeItem('theme', 'dark'),
        document.documentElement.style.setProperty(
          '--primary',
          'var(--light-primary)'
        ),
        document.documentElement.style.setProperty(
          '--secondary',
          'var(--light-secondary)'
        ),
        document.documentElement.style.setProperty(
          '--hover',
          'var(--hover-light)'
        ))
  }, [darkTheme])

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

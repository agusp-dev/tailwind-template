import { useState, useEffect } from 'react'
import { THEME } from '~/constants'

type Theme = 'light' | 'dark'

type Function = {
  value: Theme,
  toggle: () => void,
}

const THEME_KEY = 'theme'

const updateTheme = (newTheme: Theme) => {
  if (newTheme === THEME.DARK) {
    document.documentElement.classList.toggle(THEME.DARK, true)
    localStorage.setItem(THEME_KEY, THEME.DARK)
  } else {
    document.documentElement.classList.toggle(THEME.DARK, false)
    localStorage.setItem(THEME_KEY, THEME.LIGHT)
  }
}

const getCurrentTheme = (): Theme => {
  const current = localStorage?.getItem(THEME_KEY) ?? THEME.LIGHT
  return (current === THEME.LIGHT || current === THEME.DARK ? current : THEME.LIGHT) as Theme
}

export const useTheme = (): Function => {
  const [theme, setTheme] = useState<Theme>(THEME.LIGHT as Theme)

  useEffect(() => {
    const currentTheme = getCurrentTheme()
    updateTheme(currentTheme)
    setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((current: Theme): Theme => {
      const newTheme = (current === THEME.DARK ? THEME.LIGHT : THEME.DARK) as Theme
      updateTheme(newTheme)
      return newTheme
    })
  }

  return { value: theme, toggle: toggleTheme }
}

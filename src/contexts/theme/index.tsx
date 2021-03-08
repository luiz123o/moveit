import { useState, createContext, useMemo, useCallback, useEffect } from 'react'

import { PropsWithRequiredChildren } from 'common/types'
import { composeStorageKey } from 'utils/compose-storage-key'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/themes'
import GlobalStyles from 'styles/global'

export type ThemeModes = 'light' | 'dark'

export type AppThemeContext = {
  currentTheme: ThemeModes
  toggleTheme(): void
}

export const ThemeContextAtt = createContext({} as AppThemeContext)

export const AppThemeProvider = ({ children }: PropsWithRequiredChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeModes>(() => {
    //busca do tema no Local Storage
    const ISSERVER = typeof window === 'undefined'

    const storedTheme = !ISSERVER
      ? (localStorage.getItem(composeStorageKey('theme')) as ThemeModes)
      : ''

    if (storedTheme) {
      return JSON.parse(storedTheme)
    }
    if (process.browser) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
      return 'light'
    }
  })
  const toggleTheme = useCallback(
    () =>
      setCurrentTheme((prevTheme) => {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light'

        localStorage.setItem(
          composeStorageKey('theme'),
          JSON.stringify(newTheme)
        )

        return newTheme
      }),
    []
  )

  const value = useMemo(
    () => ({
      currentTheme,
      toggleTheme
    }),
    [currentTheme, toggleTheme]
  )

  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const systemColorScheme: ThemeModes = e.matches ? 'dark' : 'light'

      setCurrentTheme(systemColorScheme)
    }
    const matchMediaPrefDark = window.matchMedia('(prefers-color-scheme: dark)')
    matchMediaPrefDark?.addEventListener('change', handleSystemThemeChange)

    return () => {
      matchMediaPrefDark?.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = currentTheme

    localStorage.setItem(
      composeStorageKey('theme'),
      JSON.stringify(currentTheme)
    )
  }, [currentTheme])

  return (
    <ThemeProvider theme={theme}>
      <ThemeContextAtt.Provider value={value}>
        {children}
      </ThemeContextAtt.Provider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

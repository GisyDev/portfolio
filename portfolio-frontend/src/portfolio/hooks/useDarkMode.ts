import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'portfolio-theme-v2'

const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === 'dark' || stored === 'light') return stored
    return 'light'
}

const useDarkMode = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            return getInitialTheme()
        } catch {
            return 'light'
        }
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

    return { theme, toggle, isDark: theme === 'dark' }
}

export default useDarkMode


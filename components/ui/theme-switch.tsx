'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

interface ThemeSwitchProps {
  className?: string
}

export function ThemeSwitch({ className = '' }: ThemeSwitchProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  })
  const [ripple, setRipple] = React.useState(false)

  React.useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(savedTheme as 'light' | 'dark')
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = React.useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    setRipple(true)
    setTimeout(() => setRipple(false), 600)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex h-8 w-8 items-center justify-center rounded-full overflow-hidden ${className}`}
      style={{ color: "#00FF00" }}
    >
      {/* Liquid ripple on toggle */}
      <AnimatePresence>
        {ripple && (
          <motion.span
            key="ripple"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "rgba(0,255,0,0.18)" }}
          />
        )}
      </AnimatePresence>

      {/* Sun — active in light mode */}
      <motion.span
        className="absolute"
        animate={
          isDark
            ? { scale: 0.4, y: 12, opacity: 0 }
            : { scale: 1,   y: 0,  opacity: 1 }
        }
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        <Sun className="h-5 w-5" />
      </motion.span>

      {/* Moon — active in dark mode */}
      <motion.span
        className="absolute"
        animate={
          isDark
            ? { scale: 1,   y: 0,  opacity: 1 }
            : { scale: 0.4, y: 12, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        <Moon className="h-5 w-5" />
      </motion.span>
    </button>
  )
}

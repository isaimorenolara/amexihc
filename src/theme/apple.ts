import { defineTheme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral'

/**
 * Apple marketing surfaces, adapted from the neutral Astryx theme.
 * Light values follow apple.com; dark values follow the Apple HIG
 * system backgrounds so the same hierarchy survives color-scheme.
 */
export const appleTheme = defineTheme({
  name: 'amexihc',
  extends: neutralTheme,
  tokens: {
    '--font-family-body':
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", system-ui, sans-serif',
    '--font-family-heading':
      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
    '--color-background-body': ['#ffffff', '#000000'],
    '--color-background-surface': ['#ffffff', '#000000'],
    '--color-background-card': ['#ffffff', '#1c1c1e'],
    '--color-background-muted': ['#f5f5f7', '#1c1c1e'],
    '--color-background-popover': ['#ffffff', '#2c2c2e'],
    '--color-text-primary': ['#1d1d1f', '#f5f5f7'],
    '--color-text-secondary': ['#6e6e73', '#a1a1a6'],
    '--color-accent': ['#10465c', '#8ec8d6'],
    '--radius-container': '1.25rem',
    '--radius-element': '9999px',
    '--text-display-1-size': 'clamp(2.75rem, 7vw, 5rem)',
    '--text-display-1-leading': '1.05',
    '--text-display-1-weight': '600',
    '--text-display-2-size': 'clamp(2rem, 4vw, 3rem)',
    '--text-display-2-leading': '1.08',
    '--text-display-2-weight': '600',
  },
})

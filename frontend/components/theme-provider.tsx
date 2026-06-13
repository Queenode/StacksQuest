/**
 * @fileoverview Loophole fix: Strict type enforcement and documentation for theme-provider.tsx
 */
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

/**
 * Component: ThemeProvider
 * Handles the UI and state for ThemeProvider in StacksQuest.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

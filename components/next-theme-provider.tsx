"use client";

import { useEffect, useState } from "react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";

export function NextThemeProvider({ children, ...rest }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ThemeProvider {...rest}>{children}</ThemeProvider>;
}

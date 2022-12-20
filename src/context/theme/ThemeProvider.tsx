import { FunctionComponent, PropsWithChildren, useState } from 'react'
import { darkTheme, lightTheme, Theme, ThemeContext, ThemeVariant } from './ThemeContext';

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [ themeVariant, setThemeVariant ] = useState<ThemeVariant>('light');

  const themeMap: Record<ThemeVariant, Theme> = {
    'dark': darkTheme,
    'light': lightTheme,
  };

  return (
    <ThemeContext.Provider value={{
      ...themeMap[themeVariant],
      setThemeVariant
    }}>
      { children }
    </ThemeContext.Provider>
  );
};

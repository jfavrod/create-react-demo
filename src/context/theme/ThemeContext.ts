import React from 'react';

export type ThemeVariant = 'dark' | 'light';

export type Theme = {
  backgroundColor: string;
  bannerBackgroundColor: string;
  bannerHeaderText: string;
  borderColor: string;
  headerText: string;
  themeVariant: ThemeVariant;
  textRegular: string;
  setThemeVariant: (variant: ThemeVariant) => void;
}

export const darkTheme: Theme = {
  backgroundColor: '#172531',
  bannerBackgroundColor: '#456f93',
  bannerHeaderText: '#fff',
  borderColor: '#6993b8',
  headerText: '#cddbe7',
  themeVariant: 'dark',
  textRegular: '#fafafa',
  setThemeVariant: (variant: ThemeVariant) => {},
};

export const lightTheme: Theme = {
  backgroundColor: '#f0f4f8',
  bannerBackgroundColor: '#294257',
  bannerHeaderText: '#fff',
  borderColor: '#203344',
  headerText: '#2e4a62',
  themeVariant: 'light',
  textRegular: '#172531',
  setThemeVariant: (variant: ThemeVariant) => {},
};

export const ThemeContext = React.createContext(lightTheme);

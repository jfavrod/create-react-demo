import { FunctionComponent } from 'react';
import { useTheme } from '../context/theme/useTheme';

export const Home: FunctionComponent = () => {
  const {
    bannerBackgroundColor,
    bannerHeaderText,
    headerText,
    setThemeVariant,
    textRegular,
    themeVariant,
  } = useTheme();

  const changeTheme = () => {
    themeVariant === 'dark'
      ? setThemeVariant('light')
      : setThemeVariant('dark');
  };

  return (
    <div>
      <h1 style={{ color: headerText }}>Home</h1>
      <p style={{ color: textRegular }}>Current theme: {themeVariant}</p>

      <button
        onClick={changeTheme}
        style={{ backgroundColor: bannerBackgroundColor, color: bannerHeaderText }}
      >
        Change Theme
      </button>
    </div>
  );
};

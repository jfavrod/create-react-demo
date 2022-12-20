import { FunctionComponent, PropsWithChildren } from 'react';
import { useTheme } from '../context/theme/useTheme';

export const MainTemplate: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <div style={{
      background: theme.backgroundColor,
      height: '100%',
      margin: 0,
      padding: 0,
      position: 'fixed',
      width: '100%',
    }}>
      <div style={{ padding: '20px' }}>
        { children }
      </div>
    </div>
  );
};

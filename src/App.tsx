import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './context/theme/ThemeProvider';
import { MainTemplate } from './pages';
import { MainRouter } from './routes';

function App() {
  return (
    <ThemeProvider>
      <MainTemplate>
        <RouterProvider router={ MainRouter } />
      </MainTemplate>
    </ThemeProvider>
  );
}

export default App;

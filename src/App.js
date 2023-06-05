import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider } from './context/DarkModeContext';

export default function App() {
  const queryClient = new QueryClient();

    return (
        <>
            <DarkModeProvider>
            <Header />
            </DarkModeProvider>
            <YoutubeApiProvider>
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </YoutubeApiProvider>
        </>
    );
}
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

export default function App() {
  const queryClient = new QueryClient();

    return (
        <>
            <Header />
            <YoutubeApiProvider>
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </YoutubeApiProvider>
        </>
    );
}
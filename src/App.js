import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function App() {
  const queryClient = new QueryClient();

    return (
        <>
            <Header />
            <QueryClientProvider client={queryClient}>
            {/* <div className='w-10/12  m-auto'> */}
              <Outlet />
            {/* </div> */}
            </QueryClientProvider>
        </>
    );
}
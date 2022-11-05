import { Router, ReactLocation, Outlet } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { routes, location } from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <p className='flex-0 block w-full p-4 bg-sky-500  font-bold text-slate-900'>
          A react cookbook using only the best ingredients
        </p>
        <main className='flex-1'>
          <Outlet />
        </main>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;

import { Router, ReactLocation } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './routes';
import { Layout, Spinner } from './components';
import { Suspense } from 'react';

const location = new ReactLocation();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <Router routes={routes} location={location}>
      <QueryClientProvider client={queryClient}>
        <p className='flex-0 block w-full p-4 bg-sky-500  font-bold text-slate-900'>
          A react cookbook using only the best ingredients
        </p>
        <main className='flex-1'>
          <Suspense fallback={<Spinner />}>
            <Layout />
          </Suspense>
        </main>
      </QueryClientProvider>
    </Router>
  );
}

export default App;

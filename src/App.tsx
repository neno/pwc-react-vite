import { Router, Outlet, ReactLocation } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './routes';
import { Nav } from './components/nav';

const location = new ReactLocation();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

function App() {
  return (
    <Router routes={routes} location={location}>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Outlet />
      </QueryClientProvider>
    </Router>
  );
}

export default App;

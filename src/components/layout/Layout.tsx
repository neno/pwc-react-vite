import { Outlet } from '@tanstack/react-location';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../../lib/api';
import useStore from '../../store';

export const Layout = () => {
  const { isInitialized, setRecipes } = useStore();

  useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
    suspense: true,
    enabled: !isInitialized,
    onSuccess: (data) => setRecipes(data),
  });

  return <Outlet />;
};

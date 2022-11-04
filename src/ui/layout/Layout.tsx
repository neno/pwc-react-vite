
import { fetchRecipes } from '@/lib/api';
import useStore from '@/store';
import { Outlet } from '@tanstack/react-location';
import { useQuery } from '@tanstack/react-query';


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

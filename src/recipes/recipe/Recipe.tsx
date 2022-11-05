import { Suspense } from 'react';
import { Outlet } from '@tanstack/react-location';
import { Container, Spinner } from '@/ui';

export const Recipe = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Recipe;

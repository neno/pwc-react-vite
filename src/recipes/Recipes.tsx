import { Button, Container, PageHeader, Spinner } from '@/ui';
import { Suspense } from 'react';
import { RecipesList } from './recipes-list';

export const Recipes = () => {
  return (
    <Container>
      <PageHeader title='My Recipes'>
        <Button path='/recipes/new'>New Recipe</Button>
      </PageHeader>
      <Suspense fallback={<Spinner />}>
        <RecipesList />
      </Suspense>
    </Container>
  );
};

export default Recipes;

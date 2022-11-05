import { Button, Container, PageHeader } from '@/ui';
import { Suspense } from 'react';
import { RecipesList } from './recipes-list';

export const Recipes = () => {
  return (
    <Container>
      <PageHeader title='My Recipes'>
        <Button path='/recipes/new'>New Recipe</Button>
      </PageHeader>
      <Suspense fallback={<h1 className='text-2xl'>Loading recipes...</h1>}>
        <RecipesList />
      </Suspense>
    </Container>
  );
};

export default Recipes;

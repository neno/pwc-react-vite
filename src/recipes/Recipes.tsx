import { Suspense, lazy } from 'react';
import { Button, Message, PageHeader, Spinner } from '../components';
import { Container } from '../components/container';

const RecipesListComponent = lazy(() => import('./components/recipes-list/RecipesList'));
const SpinnerWrapper = () => (<div className='w-full p-16 grid grid-cols-1 place-items-center'><Spinner /></div>)

export const Recipes = () => {
  return (
    <Container>
      {/* <Message>Reload page to reset recipes</Message> */}
      <PageHeader title='My Recipes'>
        <Button path='/recipes/new'>New Recipe</Button>
      </PageHeader>
      <Suspense fallback={<SpinnerWrapper />}>
        <RecipesListComponent />
      </Suspense>
    </Container>
  );
};

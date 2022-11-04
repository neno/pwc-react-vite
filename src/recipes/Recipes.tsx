import { Button, Container, PageHeader, RecipesList } from '@/ui';

export const Recipes = () => {
  return (
    <Container>
      <PageHeader title='My Recipes'>
        <Button path='/recipes/new'>New Recipe</Button>
      </PageHeader>
      <RecipesList />
    </Container>
  );
};

export default Recipes;

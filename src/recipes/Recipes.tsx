import { Button, PageHeader } from '../components';
import { Container } from '../components/container';
import { RecipesList } from './components';

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

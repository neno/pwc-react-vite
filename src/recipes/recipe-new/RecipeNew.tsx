import { useNavigate } from '@tanstack/react-location';
import { Button, Container, PageHeader } from '../../components';
import useStore from '../../store';
import { RecipeForm } from '../components';
import { IRecipeFormInputs } from '../components/recipe-form/RecipeForm.types';

export const RecipeNew = () => {
  const store = useStore();
  const navigate = useNavigate();

  const submitFormData = (data: IRecipeFormInputs) => {
    store.addRecipe({ ...data, id: null });
    navigate({ to: '/', replace: true });
  };

  return (
    <Container>
      <PageHeader title='New Recipe' />
      <RecipeForm onSubmit={submitFormData}>
        <p className='py-4 full-w mt-[1.1rem] flex gap-4 align-center justify-start'>
          <Button>Add Recipe</Button>
          <Button path='/' hierarchy='tertiary'>
            Cancel
          </Button>
        </p>
      </RecipeForm>
    </Container>
  );
};

export default RecipeNew;

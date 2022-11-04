import useStore from '@/store';
import { Button, Container, PageHeader, RecipeForm } from '@/ui';
import { IRecipeFormInputs } from '@/ui/recipe-form/RecipeForm.types';
import { useNavigate } from '@tanstack/react-location';

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

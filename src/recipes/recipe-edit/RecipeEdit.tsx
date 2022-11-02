import { useMatch, useNavigate } from '@tanstack/react-location';
import { Button, Container, PageHeader } from '../../components';
import useStore, { IRecipe } from '../../store';
import { RecipeForm } from '../components';
import { IRecipeFormInputs } from '../components/recipe-form/RecipeForm.types';

export const RecipeEdit = () => {
  const { id } = useMatch().params;
  const { recipes, updateRecipe } = useStore();
  const navigate = useNavigate();
  const recipe: IRecipe | undefined = recipes.find(
    (recipe) => recipe.id === id
  );

  const submitFormData = (data: IRecipeFormInputs) => {
    updateRecipe({ ...data, id });
    navigate({ to: '/', replace: true });
  };

  return (
    <Container>
      <PageHeader title={`Edit Recipe`} />
      <RecipeForm onSubmit={submitFormData} values={recipe}>
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

export default RecipeEdit;

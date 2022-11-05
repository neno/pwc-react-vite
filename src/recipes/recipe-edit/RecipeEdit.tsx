import { useRecipeByIdQuery, useUpdateRecipeMutation } from '@/hooks/use-recipes';
import { Button, PageHeader, RecipeForm } from '@/ui';
import { IRecipeFormInputs } from '@/ui/recipe-form/RecipeForm.types';
import { useMatch, useNavigate } from '@tanstack/react-location';

export const RecipeEdit = () => {
  const navigate = useNavigate();
  const { id } = useMatch().params;
  const { data: recipe } = useRecipeByIdQuery(id);
  const {mutate} = useUpdateRecipeMutation()

  const submitFormData = (data: IRecipeFormInputs) => {
    console.log('submitFormData', data);
    
    mutate({...data, id});
    navigate({ to: '/' });
  }

  return (
    <>
      <PageHeader title={`Edit Recipe`} />
      <RecipeForm onSubmit={submitFormData} values={recipe}>
        <p className='py-4 full-w mt-[1.1rem] flex gap-4 align-center justify-start'>
          <Button>Update Recipe</Button>
          <Button path='/' hierarchy='tertiary'>
            Cancel
          </Button>
        </p>
      </RecipeForm>
    </>
  );
};

export default RecipeEdit;

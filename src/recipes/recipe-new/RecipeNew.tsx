import { useCreateRecipeMutation } from '@/hooks/use-recipes';
import { Button, Container, PageHeader, RecipeForm } from '@/ui';
import { IRecipeFormInputs } from '@/ui/recipe-form/RecipeForm.types';
import { useNavigate } from '@tanstack/react-location';

const defaultValues = {
  id: '',
  name: '',
  image: '',
  description: '',
};

export const RecipeNew = () => {
  const navigate = useNavigate();
  const { mutate } = useCreateRecipeMutation();

  const submitFormData = (data: IRecipeFormInputs) => {
    mutate(data);
    navigate({ to: '/', replace: true });
  };

  return (
    <Container>
      <PageHeader title='New Recipe' />
      <div className='relative pt-8'>
        <RecipeForm onSubmit={submitFormData} values={defaultValues}>
          <p className='py-4 full-w mt-[1.1rem] flex gap-4 align-center justify-start'>
            <Button>Add Recipe</Button>
            <Button path='/' hierarchy='tertiary'>
              Cancel
            </Button>
          </p>
        </RecipeForm>
      </div>
    </Container>
  );
};

export default RecipeNew;

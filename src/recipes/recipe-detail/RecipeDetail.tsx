import { useRecipeByIdQuery } from '@/hooks/use-recipes';
import { Button, PageHeader } from '@/ui';
import { useMatch } from '@tanstack/react-location';

export const RecipeDetail = () => {
  const { id } = useMatch().params;
  const { data: recipe } = useRecipeByIdQuery(id);

  if (!recipe) return null;

  return (
    <>
      <PageHeader title={recipe.name} />
      <div className='border-b-2 border-sky-500 relative py-4 flex align-center justify-between'>
        <Button path={`/`} size='small' hierarchy='tertiary'>
          {`Back to index`}
        </Button>
        <Button path={`/recipes/${recipe.id}/edit`} size='small'>
          Edit
        </Button>
      </div>
      <div className='grid grid-cols-12 pt-8'>
        <div className='col-span-7'>
          <img
            src={recipe.image}
            width={864}
            height={648}
            className='max-w-full max-h-full object-contain'
            loading='lazy'
          />
        </div>
        <div className='col-span-5'>
          <div className='w-full h-full text-white flex-1 text-xl leading-relaxed px-8 flex flex-col justify-end'>
            {recipe.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;

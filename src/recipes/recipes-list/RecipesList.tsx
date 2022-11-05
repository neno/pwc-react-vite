import { useRecipesQuery } from '@/hooks/use-recipes';
import { RecipeListItem } from './components/recipe-list-item';

export const RecipesList = () => {
  const { data } = useRecipesQuery();

  return (
    <ul>
      {data?.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </ul>
  );
};

export default RecipesList;

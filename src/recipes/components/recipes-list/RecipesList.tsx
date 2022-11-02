import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../../../lib/api';
import useStore from '../../../store';
import { RecipeListItem } from './components/recipe-list-item';

export const RecipesList = () => {
  const { isInitialized, recipes, setRecipes, deleteRecipe } = useStore();

  // useQuery({
  //   queryKey: ['recipes'],
  //   queryFn: fetchRecipes,
  //   suspense: true,
  //   enabled: !isInitialized,
  //   onSuccess: (data) => setRecipes(data),
  // });

  return (
    <ul>
      {recipes?.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          onDelete={deleteRecipe}
        />
      ))}
    </ul>
  );
};

export default RecipesList;

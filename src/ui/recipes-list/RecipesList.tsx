import useStore from '@/store';
import { RecipeListItem } from './components/recipe-list-item';

export const RecipesList = () => {
  const { recipes, deleteRecipe } = useStore();

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

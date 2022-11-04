import { IRecipe } from '@/store';

export interface IRecipeListItemProps {
  recipe: IRecipe;
  onDelete: (id: string) => void
}

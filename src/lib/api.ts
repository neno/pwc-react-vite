import { IRecipe } from './../store';
import { initialRecipes } from '../initial-recipes';

// Simulate a long lasting API call
export const fetchRecipes = async (): Promise<IRecipe[]> => {
  return new Promise(resolve => setTimeout(() => resolve(initialRecipes), 2000))
}

import { IRecipe } from '@/recipes/Recipes.types';
import { IRecipeFormInputs } from '@/ui/recipe-form/RecipeForm.types';
import { useMutation } from '@tanstack/react-query';

const baseUrl = `http://localhost:3000`;

export const fetchRecipes = async (): Promise<IRecipe[]> => {
  const res = await fetch(`${baseUrl}/recipes`);
  return await res.json();
};

export const fetchRecipeById = async (id: string): Promise<IRecipe> => {
  const res = await fetch(`${baseUrl}/recipes/${id}`);
  return await res.json();
  // const data = res.json()
  // return new Promise(resolve => setTimeout(() => resolve(data), 2000));
};

export const createRecipe = async (recipe: IRecipeFormInputs) => {
  const res = await fetch(`${baseUrl}/recipes`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe),
  });

  return await res.json();
};

export const updateRecipe = async (recipe: IRecipe) => {
  const res = await fetch(`${baseUrl}/recipes/${recipe.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe),
  });

  return await res.json();
};

export const deleteRecipe = async (id: string) => {
  const res = await fetch(`${baseUrl}/recipes/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });

  return await res.json();
};

export const useCreateRecipe = () => useMutation(createRecipe)

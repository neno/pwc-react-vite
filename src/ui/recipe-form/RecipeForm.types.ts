import { IRecipe } from '@/recipes/Recipes.types';
import { ReactNode } from 'react';

export interface IRecipeFormProps {
  onSubmit: (data: IRecipe) => void;
  children: ReactNode;
  values?: IRecipe;
}

export interface IRecipeFormInputs {
  name: string;
  description: string;
  image: string;
};

export type InputsType = 'name' | 'description' | 'image';

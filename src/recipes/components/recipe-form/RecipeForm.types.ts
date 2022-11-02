import { ReactNode } from 'react';

export interface IRecipeFormProps {
  onSubmit: (data: IRecipeFormInputs) => void;
  children: ReactNode;
  values?: IRecipeFormInputs;
}

export interface IRecipeFormInputs {
  name: string;
  description: string;
  image: string;
};

export type InputsType = 'name' | 'description' | 'image';

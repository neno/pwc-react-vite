import { MakeGenerics, ReactLocation, Route } from '@tanstack/react-location';
import { IRecipe } from './store';

export const routes: Route[] = [
  {
    path: '/',
    element: () => import('./recipes/Recipes').then((module) => <module.default />),
  },
  {
    path: 'recipes',
    children: [
      {
        path: 'new',
        element: () => import('./recipes/recipe-new/RecipeNew').then((module) => <module.default />),
      },
      {
        path: ':id',
        element: () => import('./recipes/recipe/Recipe').then((module) => <module.default />),
        children: [
          {path: '/edit', element: () => import('./recipes/recipe-edit/RecipeEdit').then((module) => <module.default />)},
          {path: '/', element: () => import('./recipes/recipe-detail/RecipeDetail').then((module) => <module.default />)}
        ]
      },
    ],
  },
];

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    recipes: IRecipe[];
    recipe: IRecipe;
  };
}>;

export const location = new ReactLocation();

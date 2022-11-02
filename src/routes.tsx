import { Route } from '@tanstack/react-location';
import { Recipes } from './recipes';

export const routes: Route[] = [
  {
    path: '/',
    element: <Recipes />,
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
        children: [
          {path: '/edit', element: () => import('./recipes/recipe-edit/RecipeEdit').then((module) => <module.default />)},
          {path: '/', element: () => import('./recipes/recipe-detail/RecipeDetail').then((module) => <module.default />)}
        ]
      },
    ],
  },
];

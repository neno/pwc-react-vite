import { IRecipe } from './../store/index';
import { deleteRecipe, fetchRecipeById, fetchRecipes, updateRecipe, createRecipe } from '@/lib/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useRecipesQuery = () =>
  useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    suspense: true,
  });

export const useRecipeByIdQuery = (id: string) =>
  useQuery({
    queryKey: ['recipe', id],
    queryFn: () => fetchRecipeById(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    suspense: true,
  });

export const useCreateRecipeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createRecipe, {
    onSuccess: () => queryClient.invalidateQueries(['recipes'])
  })
}

export const useUpdateRecipeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(updateRecipe, {
    onMutate: async (recipe) => {
      const prevRecipe: IRecipe | undefined = queryClient.getQueryData([
        'recipe',
        recipe.id,
      ]);
      const prevRecipes: IRecipe[] | undefined = queryClient.getQueryData([
        'recipes',
      ]);

      await queryClient.cancelQueries(['recipe', recipe.id]);
      queryClient.setQueryData(['recipe', recipe.id], recipe);

      await queryClient.cancelQueries(['recipes']);
      const newRecipes = prevRecipes?.map((rec: IRecipe) => rec.id === recipe.id ? recipe : rec);
      queryClient.setQueryData(['recipes'], newRecipes);

      return { prevRecipe, prevRecipes };
    },
    onError: (_error, _recipe, context) => {
      queryClient.setQueryData(['recipe', context?.prevRecipe?.id], context?.prevRecipe);
      queryClient.setQueryData(['recipes'], context?.prevRecipes);
    },
  });
};

export const useDeleteRecipeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteRecipe, {
    onMutate: async (id) => {
      await queryClient.cancelQueries(['recipes']);
      const prevRecipes: IRecipe[] | undefined = queryClient.getQueryData([
        'recipes',
      ]);
      const newRecipes = prevRecipes?.filter((rec: IRecipe) => rec.id !== id);
      queryClient.setQueryData(['recipes'], newRecipes);
    },
    // onSuccess: () => queryClient.invalidateQueries(['recipes']),
  })
}
import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export interface IRecipe {
  id: string | null;
  name: string;
  description: string;
  image: string;
}

export interface IStore {
  isInitialized: boolean;
  recipes: IRecipe[];
  setRecipes: (recipes: IRecipe[]) => void;
  addRecipe: (recipe: IRecipe) => void;
  setNewRecipe: (recipe: IRecipe) => void;
  deleteRecipe: (id: string) => void;
  updateRecipe: (recipe: IRecipe) => void;
}

const addRecipe = (recipes: IRecipe[], recipe: IRecipe): IRecipe[] => [
  ...recipes,
  { ...recipe, id: uuidv4() },
];

const updateRecipe = (recipes: IRecipe[], recipe: IRecipe): IRecipe[] =>
  recipes.map((rec) => (rec.id === recipe.id ? recipe : rec));

const useStore = create<IStore>(
  (set): IStore => ({
    isInitialized: false,
    recipes: [],
    setRecipes: (recipes: IRecipe[]) => set((state) => ({ ...state, recipes, isInitialized: true })),
    addRecipe: (newRecipe: IRecipe) =>
      set((state) => ({
        ...state,
        recipes: addRecipe(state.recipes, newRecipe),
      })),
    setNewRecipe: (recipe: IRecipe) =>
      set((state) => ({ ...state, newRecipe: recipe })),
    deleteRecipe: (id: string) =>
      set((state) => ({
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
      })),
    updateRecipe: (recipe: IRecipe) =>
      set((state) => ({
        ...state,
        recipes: updateRecipe(state.recipes, recipe),
      })),
  })
);

export default useStore;

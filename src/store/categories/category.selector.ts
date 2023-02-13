import { createSelector } from 'reselect';
import { DirectoryCategory } from '../../components/directory/directory.component';

import { RootState } from '../store';
import { CategoriesState, MainCategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
const selectMainCategoryReducer = (state: RootState): MainCategoriesState =>
  state.main_categories;

export const selectMainCategories = createSelector(
  [selectMainCategoryReducer],
  (categoriesSlice) => categoriesSlice.main_categories
);

export const selectMainCategoriesMap = createSelector(
  [selectMainCategories],
  (main_categories): DirectoryCategory[] => main_categories
);

export const selectMainCategoriesIsLoading = createSelector(
  [selectMainCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

import { AnyAction } from 'redux';

import { Category } from './category.types';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchMainCategoriesStart,
  fetchMainCategoriesSuccess,
  fetchMainCategoriesFailed,
} from './category.action';
import { DirectoryCategory } from '../../components/directory/directory.component';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export type MainCategoriesState = {
  readonly main_categories: DirectoryCategory[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};
export const MAIN_CATEGORIES_INITIAL_STATE: MainCategoriesState = {
  main_categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
export const MaincategoriesReducer = (
  state = MAIN_CATEGORIES_INITIAL_STATE,
  action: AnyAction
): MainCategoriesState => {
  if (fetchMainCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchMainCategoriesSuccess.match(action)) {
    return { ...state, main_categories: action.payload, isLoading: false };
  }

  if (fetchMainCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};

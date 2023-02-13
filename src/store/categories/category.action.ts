import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { DirectoryCategory } from '../../components/directory/directory.component';

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSucess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;
export type FetchMainCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_START>;

export type FetchMainCategoriesSucess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_SUCCESS,
  DirectoryCategory[]
>;

export type FetchMainCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_FAILED,
  Error
>;

export const fetchMainCategoriesStart = withMatcher(
  (): FetchMainCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_START)
);

export const fetchMainCategoriesSuccess = withMatcher(
  (categoriesArray: DirectoryCategory[]): FetchMainCategoriesSucess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchMainCategoriesFailed = withMatcher(
  (error: Error): FetchMainCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_FAILED, error)
);

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSucess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

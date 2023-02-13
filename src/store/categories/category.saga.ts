import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import { getCategoriesAndDocuments, getMainCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchMainCategoriesFailed,
  fetchMainCategoriesSuccess,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
export function* fetchMainCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getMainCategoriesAndDocuments);
    yield* put(fetchMainCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchMainCategoriesFailed(error as Error));
  }
}

export function* onFetchMainCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_MAIN_CATEGORIES_START,
    fetchMainCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([
    call(onFetchCategories),
    call(onFetchMainCategories)
  ]);
}

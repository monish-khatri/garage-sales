export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
  FETCH_MAIN_CATEGORIES_START = 'category/FETCH_MAIN_CATEGORIES_START',
  FETCH_MAIN_CATEGORIES_SUCCESS = 'category/FETCH_MAIN_CATEGORIES_SUCCESS',
  FETCH_MAIN_CATEGORIES_FAILED = 'category/FETCH_MAIN_CATEGORIES_FAILED',
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  category: string,
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};

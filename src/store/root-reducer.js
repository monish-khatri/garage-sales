import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer, MaincategoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  main_categories: MaincategoriesReducer,
});

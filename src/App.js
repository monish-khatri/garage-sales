import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';
import { fetchCategoriesStart, fetchMainCategoriesStart } from './store/categories/category.action';
import ProductDetail from './components/product-detail/product-detail.component';
import AddProductForm from './components/add-product-form/add-product-form.component';

const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
);
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() =>
  import('./routes/authentication/authentication.component')
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  useEffect(() => {
    dispatch(fetchMainCategoriesStart());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='shop/:category/:productId/detail' element={<ProductDetail />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='add-product' element={<AddProductForm />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { CategoryItem } from '../../store/categories/category.types';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductDetailContainer,
 
} from './product-detail.styles';
type CategoryRouteParams = {
  product: string;
};

const ProductDetail = () => {
  const { product } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  console.log(product);
  // const { name, price, imageUrl,category } = product;
  // const dispatch = useDispatch();
  // const cartItems = useSelector(selectCartItems);
  // const navigate = useNavigate();

  return (
    <ProductDetailContainer>
      Hello
      {/* <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={showProductDetail}
      >
        Product Details
      </Button> */}
    </ProductDetailContainer>
  );
};

export default ProductDetail;

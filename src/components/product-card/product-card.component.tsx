import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { CategoryItem } from '../../store/categories/category.types';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

type ProductCardProps = {
  category: string;
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ category, product }) => {
  const { name, price, imageUrl,id } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  const showProductDetail = useCallback(() => {
    navigate(`/shop/${category}/${id}/detail`,{state: product});
  }, []);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
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
      </Button>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Chat
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;

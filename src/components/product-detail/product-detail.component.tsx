import { FC, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CategoryItem } from '../../store/categories/category.types';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  Footer,
  Name,
  Price,
  ProductDetailContainer,
} from './product-detail.styles';
type CategoryRouteParams = {
  category: string;
  productId: string;
};

const ProductDetail: FC<CategoryRouteParams> = () => {
  const { productId, category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const location = useLocation()
  const product = location.state as CategoryItem
  const { description, imageUrl, name, price } = product;

  const navigate = useNavigate();
  const backHandler = useCallback(() => {
    navigate(-1);
  }, []);
  return (
    <ProductDetailContainer>
     <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      {description}
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={backHandler}
      >
        Back
      </Button>
    </ProductDetailContainer>
  );
};

export default ProductDetail;

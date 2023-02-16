import { FC, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CategoryItem } from '../../store/categories/category.types';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  Footer,
  Label,
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
        <Label>Price:</Label>
        <Price>${price}</Price>
      </Footer>
      <Footer>
        <Label>Name:</Label>
        <Name>{name}</Name>
      </Footer>
      <Footer>
        <Label>Description:</Label>
        <Name>{description}</Name>
      </Footer>
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

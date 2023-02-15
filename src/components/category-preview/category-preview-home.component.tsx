import { FC } from 'react';

import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

import { CategoryItem } from '../../store/categories/category.types';

type CategoryPreviewProps = {
  title: string;
  category: string;
  products: CategoryItem[];
};

const CategoryPreviewHome: FC<CategoryPreviewProps> = ({ category, title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Preview>
        {products
          .map((product) => (
            <ProductCard key={product.id} category={category} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreviewHome;

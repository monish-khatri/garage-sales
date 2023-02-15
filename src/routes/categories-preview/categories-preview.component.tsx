import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { FC } from 'react';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import CategoryPreviewHome from '../../components/category-preview/category-preview-home.component';

type CategoriesPreviewProps = {
  from: string;
};

const CategoriesPreview: FC<CategoriesPreviewProps> = ({ from }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <Fragment>
              {
              from == 'home' ? (
                <CategoryPreviewHome key={title} title={title} category={title} products={products} />
              ) : (
                <CategoryPreview key={title} title={title} category={title} products={products} />
              )
            }
            </Fragment>
          )
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;

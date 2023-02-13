import { Key, useEffect } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
import { useSelector } from 'react-redux';
import { selectMainCategoriesIsLoading, selectMainCategoriesMap } from '../../store/categories/category.selector';
import Spinner from '../spinner/spinner.component';
import { useState } from 'react';
export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};
const Directory = () => {
  const mainCategoriesMap = useSelector(selectMainCategoriesMap);
  const isLoading = useSelector(selectMainCategoriesIsLoading);
  const [products, setProducts] = useState(mainCategoriesMap);

  useEffect(() => {
    setProducts(mainCategoriesMap);
  }, [mainCategoriesMap]);
  return (
    <DirectoryContainer>
      {
      isLoading ? (
        <Spinner />
      ) : (products &&
        products.map((category: any) => {
          return <DirectoryItem key={category.id} category={category} />
        })
      )}
    </DirectoryContainer>
  );
};

export default Directory;

import { Fragment, Key, useEffect } from 'react';

import { PageTitle } from './directory.styles';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  slug: string;
};
const Directory = () => {
  return (
    <Fragment>
      <PageTitle>
        {'Products'.toUpperCase()}
      </PageTitle>
      <CategoriesPreview from="home"/>
    </Fragment>
  );
};

export default Directory;

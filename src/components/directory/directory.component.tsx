import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
import {CATEGORY} from '../../shop-data';
export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};


const Directory = () => {
  return (
    <DirectoryContainer>
      {CATEGORY.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

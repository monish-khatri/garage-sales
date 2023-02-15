import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { AddProductContainer } from './add-product-form.styles';
import { addProductToDocument } from '../../utils/firebase/firebase.utils';
import { CategoryItem } from '../../store/categories/category.types';
import { selectMainCategoriesIsLoading, selectMainCategoriesMap } from '../../store/categories/category.selector';
import Spinner from '../spinner/spinner.component';

const defaultFormFields = {
  id: 0,
  name: '',
  price: 0,
  imageUrl: '',
  description: '',
  category: '',
};

const AddProductForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields as CategoryItem);
  const { category, name, price, imageUrl, description } = formFields;
  const mainCategoriesMap = useSelector(selectMainCategoriesMap);
  const isLoading = useSelector(selectMainCategoriesIsLoading);
  const [products, setProducts] = useState(mainCategoriesMap);
  useEffect(() => {
    setProducts(mainCategoriesMap);
  }, [mainCategoriesMap]);
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      addProductToDocument('sub_categories', category, formFields);
      resetFormFields();
      alert('Product Added Successfully');
    } catch (error) {
        console.log('product creation encountered an error', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <AddProductContainer>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <select name="category" value={category} className="form-control"
          onChange={e => setFormFields({ ...formFields, ['category']: e.target.value})}
          >
          {
          isLoading ? (
            <Spinner />
          ) : (products &&
            products.map((category: any) => {
              return <option key={category.slug} value={category.slug}>{category.title}</option>
            })
          )}
        </select>

        <FormInput
          label='Product Name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />

        <FormInput
          label='Price'
          type='integer'
          required
          onChange={handleChange}
          name='price'
          value={price}
        />

        <FormInput
          label='Image'
          type='text'
          required
          onChange={handleChange}
          name='imageUrl'
          value={imageUrl}
        />

        <FormInput
          label='Description'
          type='textarea'
          required
          onChange={handleChange}
          name='description'
          value={description}
        />
        <Button type='submit'>Add Product</Button>
      </form>
    </AddProductContainer>
  );
};

export default AddProductForm;

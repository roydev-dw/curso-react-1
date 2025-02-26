import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Killua']);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>

      <AddCategory onNewCategory={(value) => addCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

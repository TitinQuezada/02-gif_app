import React, { useState } from 'react';
import AddCategoryComponent from './Components/AddCategory/AddCategoryComponent';
import GifGridComponent from './Components/GifGrid/GifGridComponent';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch Man',
    'Samurai x',
    'Dragon Ball Z',
  ]);

  return (
    <React.Fragment>
      <h2>GifExpertApp</h2>
      <AddCategoryComponent
        categories={categories}
        setCategories={setCategories}
      />
      <hr></hr>
      <ol>
        {categories.map((category) => (
          <GifGridComponent key={category} category={category} />
        ))}
      </ol>
    </React.Fragment>
  );
};

export default GifExpertApp;

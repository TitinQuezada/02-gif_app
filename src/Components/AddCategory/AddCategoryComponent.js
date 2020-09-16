import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddCategoryComponent.css';

const AddCategoryComponent = ({ setCategories }) => {
  const [value, setvalue] = useState('');

  const addCategory = (event) => {
    event.preventDefault();

    if (value) {
      setCategories((categories) =>
        validateCategory(value, categories)
          ? [value, ...categories]
          : categories
      );

      setvalue('');
    }
  };

  const validateCategory = (category, categories) => {
    const isValid = categories.find((cat) => cat === category) ? false : true;
    return isValid;
  };

  return (
    <form onSubmit={addCategory}>
      <input
        className='inputSize mr-2'
        value={value}
        onChange={(event) => setvalue(event.target.value)}
        placeholder='Buscar Gif'
      ></input>
      <button className='buttonSize'>Buscar</button>
    </form>
  );
};

AddCategoryComponent.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategoryComponent;

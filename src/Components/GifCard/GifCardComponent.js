import React from 'react';
import './GifCard.Component.css';
import PropTypes from 'prop-types';

const GifCardComponent = ({ title, image }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} height='100px'></img>
      <p>{title}</p>
    </div>
  );
};

GifCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GifCardComponent;

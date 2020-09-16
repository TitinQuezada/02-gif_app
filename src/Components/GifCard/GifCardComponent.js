import React from 'react';
import './GifCard.Component.css';

const GifCardComponent = ({ id, title, image, remove }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} height='100px'></img>
      <p>{title}</p>
      <div></div>
    </div>
  );
};

export default GifCardComponent;

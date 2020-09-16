import React from 'react';
import PropTypes from 'prop-types';
import GifCardComponent from '../GifCard/GifCardComponent';
import './GifGridComponent.css';
import useFechtGif from '../../hooks/useFechtGif';

const GifGridComponent = ({ category }) => {
  const { gifs, loading } = useFechtGif(category);

  return (
    <React.Fragment>
      <h3>{category}</h3>
      <hr></hr>
      <div className='row'>
        {loading
          ? 'cargando....'
          : gifs.map((gif) => <GifCardComponent key={gif.id} {...gif} />)}
      </div>
    </React.Fragment>
  );
};

GifGridComponent.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGridComponent;

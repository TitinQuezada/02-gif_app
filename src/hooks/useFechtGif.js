import { useState, useEffect } from 'react';
import { getGifs } from '../Services/GifService';

const useFechtGif = (category) => {
  const [data, setdata] = useState({ gifs: [], loading: true });

  useEffect(() => {
    getGifs(category).then((gifs) => setdata({ gifs: gifs, loading: false }));
  }, [category]);

  return data;
};

export default useFechtGif;

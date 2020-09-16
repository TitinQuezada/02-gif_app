export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GsKlFVs7BUxAGmyrWeKQT2T5zw0D1JU1&q=${encodeURI(
    category
  )}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    image: gif.images.downsized_medium.url,
  }));

  return gifs;
};

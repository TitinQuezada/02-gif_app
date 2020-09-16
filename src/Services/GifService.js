export const getGifs = async (category) => {
  if (!category) {
    return [];
  }

  const apiKey = 'GsKlFVs7BUxAGmyrWeKQT2T5zw0D1JU1';
  const encondeCategory = encodeURI(category);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encondeCategory}&limit=10`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    image: gif.images.downsized_medium.url,
  }));

  return gifs;
};

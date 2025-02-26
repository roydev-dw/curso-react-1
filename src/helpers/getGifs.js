export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=QW0rN3FqUFhisI6zmTrZ4nDRCHfZMAst&q=${category} &limit=10`;
  const response = await fetch(url);

  const { data } = await response.json();
  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));
  return gifs;
};

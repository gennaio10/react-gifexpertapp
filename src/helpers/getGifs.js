export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kua7ckiJim07QPyAO3iA0YFUvt0lAq7N&q=${encodeURI(
      category
    )}&limit=10`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    return data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
  } catch (error) {
    return "No encontro ninguna url...";
  }
};

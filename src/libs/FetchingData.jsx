const baseURl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const FetchingDataMovies = async (source, page) => {
  const respone = await fetch(
    `${baseURl}/${source}?api_key=${apiKey}&page=${page}`
  );
  const datas = await respone.json();
  return datas;
};

export const FetchingDetailMovie = async (movieId) => {
  const respone = await fetch(`${baseURl}/${movieId}?api_key=${apiKey}`);
  const datas = await respone.json();
  return datas;
};

const baseSearchUrl = process.env.NEXT_PUBLIC_SEARCH_MOVIE_URL;

export const FetchingSearchMovie = async (query, page) => {
  const respone = await fetch(
    `${baseSearchUrl}?query=${query}&api_key=${apiKey}&page=${page}`
  );
  const datas = await respone.json();
  return datas;
};

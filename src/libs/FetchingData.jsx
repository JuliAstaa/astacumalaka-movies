const baseURl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const FetchingDataMovies = async (source) => {
  const respone = await fetch(`${baseURl}/${source}?api_key=${apiKey}`);
  const datas = await respone.json();
  return datas.results;
};

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f9eecd9839msh6290eeffcbdc36ap103c6ajsn933e2f22f452",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f9eecd9839msh6290eeffcbdc36ap103c6ajsn933e2f22f452",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

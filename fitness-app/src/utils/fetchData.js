export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a774a7ca5msh4b985aa3c9a5669p1235dbjsnb52649eba61f",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9a774a7ca5msh4b985aa3c9a5669p1235dbjsnb52649eba61f",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

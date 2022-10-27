export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "daadb4c5a5msh36f1a1ed1cfc948p13ed1ejsnba2dbf670153",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "daadb4c5a5msh36f1a1ed1cfc948p13ed1ejsnba2dbf670153",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

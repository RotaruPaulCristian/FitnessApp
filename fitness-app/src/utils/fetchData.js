export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b29ed3381bmsh0a35dfcd1746c38p153d87jsnde94c27ccc63",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b29ed3381bmsh0a35dfcd1746c38p153d87jsnde94c27ccc63",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

const API_BASE_URL = "https://api.tvmaze.com";

async function apiGet(query) {
  const response = await fetch(`${API_BASE_URL}${query}`).then((r) => r.json());
  return response ;
}

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForActors = query => apiGet(`/search/people?q=${query}`);
export const getShowById = showId => apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`,);

export const getShowsByIds = async showIds => {
  const promises = showIds.map(showId => apiGet(`/shows/${showId}`))
  return Promise.all(promises);
}
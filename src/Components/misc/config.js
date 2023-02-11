const API_BASE_URL = "https://api.tvmaze.com";

async function apiGet(query) {
  const response = await fetch(`${API_BASE_URL}${query}`).then((r) => r.json());
  return response ;
}

// const call = async () => {
//   const res = await fetch(`https://api.tvmaze.com/search/shows?q=girls`);
//   const json = await res.json();
//   console.log(json);
// };


export default apiGet ;
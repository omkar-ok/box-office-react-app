import React from 'react'
import { useStarredShows } from '../lib/useStarredShows'

const About = () => {
  const [staredShows] = useStarredShows();

//   const onSearch = () => {
//     apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
//       console.log(result);
//       setResults(result);
//     });
// };


  return (
    <div>
      <h2>This is About h2</h2>
      <p>Starred {staredShows.length} </p>
    </div>
  )
}

export default About

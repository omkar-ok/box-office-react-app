import React from 'react'
import { useStarredShows } from '../lib/useStarredShows'
import { useQuery } from 'react-query';
import { getShowsByIds } from '../../api/tvmaze';
import ShowGrid from '../show/ShowGrid';

const Starred = () => {
  const [staredShowsIds] = useStarredShows();

  const { data: staredShows, error } = useQuery({
    queryKey: ['show', staredShowsIds],
    queryFn: () => getShowsByIds(staredShowsIds).then(results => results.map(show=>({show}))),
    refetchOnWindowFocus: false
  })

  if (!staredShows) {
    return <div>content is loading</div>
  }

  if (error) {
    return <div>error occured {error} </div>
  }
  if(staredShows?.length === 0){
    return <div>No shows where starred </div>
  }

  if(staredShows?.length > 0){
    return <ShowGrid data={staredShows} />
  }

  return (
    <div>
      <h2>This is starred h2</h2>
      <p>Starred {staredShowsIds.length} </p>
    </div>
  )
}

export default Starred

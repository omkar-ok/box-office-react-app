import React from 'react'
import { useStarredShows } from '../lib/useStarredShows'
import { useQuery } from 'react-query';
import { getShowsByIds } from '../../api/tvmaze';
import ShowGrid from '../show/ShowGrid';
import { TextCenter } from '../Common/TextCenter';

const Starred = () => {
  const [staredShowsIds] = useStarredShows();

  const { data: staredShows, error } = useQuery({
    queryKey: ['show', staredShowsIds],
    queryFn: () => getShowsByIds(staredShowsIds).then(results => results.map(show=>({show}))),
    refetchOnWindowFocus: false
  })

  if (!staredShows) {
    return <TextCenter>content is loading</TextCenter>
  }

  if (error) {
    return <TextCenter>error occured {error} </TextCenter>
  }
  if(staredShows?.length === 0){
    return <TextCenter>No shows where starred </TextCenter>
  }

  if(staredShows?.length > 0){
    return <ShowGrid data={staredShows} />
  }

  return (
    <TextCenter>
      <h2>This is starred h2</h2>
      <p>Starred {staredShowsIds.length} </p>
    </TextCenter>
  )
}

export default Starred

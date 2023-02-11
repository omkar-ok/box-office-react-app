import React from 'react'
import { useParams } from 'react-router-dom'
import { getShowById } from '../../api/tvmaze';
import { useQuery } from 'react-query'
import ShowMainData from '../show/showMainData'
import ShowDetails from '../show/showDetails';
import ShowCast from '../show/showCast';
import ShowSeasons from '../show/showSeasons';


function Show() {
  const { id } = useParams();

  const { data: showData, error } = useQuery({
    queryKey: ['show', id],
    queryFn: () => getShowById(id),
    refetchOnWindowFocus: false
  })



  if (!showData) {
    return <div>content is loading</div>
  }

  if (error) {
    return <div>error occured {error} </div>
  }

  return (
    <div>this is show page <br />
      {/* {showData.name}
      <img src={showData.image.medium} alt="images" /> */}
      <ShowMainData
        image={showData.image}
        name={showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}
      />
      <ShowDetails
        status={showData.status}
        premiered={showData.premiered}
        network={showData.network}
      />
      <ShowSeasons seasons={showData._embedded.seasons} />
      <ShowCast casts={showData._embedded.cast} />
    </div>
  )
}

export default Show
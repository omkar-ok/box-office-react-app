import React from 'react'

function showSeasons({seasons}) {
  return (
    <div>
        <p>Seasons in total: {seasons.length} </p>
        <p>Episodes in total: {seasons.reduce((sum, season)=> sum + season.episodeOrder, 0 )} </p>

        <div>
            <hr />
            {seasons.map(season =>(
                <div key={season.id} >
                    <p>Season {season.number}</p>
                    <p>Episodes: {season.episodeOrder} </p>
                    <div>
                        Aired : {season.premiereDate} to {season.endDate}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    </div>
  )
}

export default showSeasons
import React from 'react'
import IMAGE_NOT_FOUND from "../../img/image_not_found.jpg";


function showCast({casts}) {
  return (
    <div>
        {casts.map(cast => <div key={cast.person.id} >
            <div>
                <img src={cast.person.image ? cast.person.image.medium : IMAGE_NOT_FOUND } alt="" />
            </div>
            <div>
                {cast.person.name} | {cast.character.name} {cast.voice && '| voice over' }
            </div>
        </div> )}
    </div>
  )
}

export default showCast
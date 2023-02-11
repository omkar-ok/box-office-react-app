import React from 'react'
import IMAGE_NOT_FOUND from "../../img/image_not_found.jpg";

function showMainData({ image, name, rating, summary, genres }) {
    return (
        <div>
            <img src={image ? image.orignial ? image.original : image.medium : IMAGE_NOT_FOUND } alt={name} />
            <div>
                <h1> {name} </h1>
                <div> {rating.average || 'N/A'} </div>
                <div dangerouslySetInnerHTML={{ __html: summary }} />
                <div> Genres:
                    <div>
                        {genres.map(genre=> <span key={genre} > {genre} </span> )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default showMainData
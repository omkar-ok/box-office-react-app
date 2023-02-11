import React from "react";
import ShowCards from "./ShowCards";
import { FlexGrid } from "../styled";
import {useStarredShows} from "../lib/useStarredShows"

import IMAGE_NOT_FOUND from "../../img/image_not_found.jpg";


const ShowGrid = ({ data }) => {
  const [staredShows, dispatchStarred ] = useStarredShows();
  

  

  const onStarMeClicked = (showId) => {
    const isStarred = staredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId })
    } else {
      dispatchStarred({ type: 'STAR', showId })
    }
  }

  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCards
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
          onStarMeClicked={onStarMeClicked}
          isStarred={staredShows.includes(show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;

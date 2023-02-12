import React from "react";
import ActorCard from "./ActorCard";
import { FlexGrid } from "../Common/FlexGrid";

import IMAGE_NOT_FOUND from '../../img/image_not_found.jpg'

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => {
        return <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          bithday={person.birthday}
          dethday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />;
      })}
    </FlexGrid>
  );
};

export default ActorGrid;

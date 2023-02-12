import React from 'react'
import { StyledActorCard } from './ActorCardStyled';
import { SearchImgWrapper } from '../Common/SearchCard';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <StyledActorCard>
      <SearchImgWrapper className='img-wrapper'>
        <img src={image} alt="actor" />
      </SearchImgWrapper>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className='deathday'>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard
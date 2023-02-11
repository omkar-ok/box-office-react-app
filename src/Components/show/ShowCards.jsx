import React from 'react';
import {Link} from 'react-router-dom'
import { StyledShowCard } from './ShowCardStyled';

const ShowCards = ({ id, image, name, summary, onStarMeClicked, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className='img-wrapper'>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={()=> onStarMeClicked(id) } >
          {isStarred? "Unstar me" : "Star me"}
        </button>
      </div>
    </StyledShowCard>
  );
};


export default ShowCards
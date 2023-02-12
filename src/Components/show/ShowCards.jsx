import React from 'react';
import {Link} from 'react-router-dom'
import { StyledShowCard } from './ShowCardStyled';
import styled from 'styled-components';
import {SearchImgWrapper, SearchCard} from '../Common/SearchCard'
import { StarIcon } from '../Common/StarIcon';

const ShowCards = ({ id, image, name, summary, onStarMeClicked, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <SearchCard>
      <SearchImgWrapper className='img-wrapper'>
        <img src={image} alt="show" />
      </SearchImgWrapper>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <ActionSection className='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <StarBtn type="button" onClick={()=> onStarMeClicked(id) } >
          <StarIcon active={isStarred} />
          {isStarred? "Unstar me" : "Star me"}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};


export default ShowCards


const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
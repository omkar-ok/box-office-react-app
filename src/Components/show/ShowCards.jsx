import React, {useRef} from 'react';
import {Link} from 'react-router-dom'
import { StyledShowCard } from './ShowCardStyled';
import styled from 'styled-components';
import {SearchImgWrapper, SearchCard} from '../Common/SearchCard'
import { StarIcon } from '../Common/StarIcon';

const ShowCards = ({ id, image, name, summary, onStarMeClicked, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  const starBtnRef = useRef();

  const handleClick = ()=>{
    onStarMeClicked(id)
    if(!starBtnRef.current) return;

    if (isStarred) {
      starBtnRef.current.classList.remove('animate');
    } else {
      starBtnRef.current.classList.add('animate');
    }
  }

  return (
    <SearchCard>
      <SearchImgWrapper className='img-wrapper'>
        <img src={image} alt="show" />
      </SearchImgWrapper>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <ActionSection className='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <StarBtn type="button" onClick={handleClick} ref={starBtnRef}  >
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
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
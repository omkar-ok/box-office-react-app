import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getShowById } from '../../api/tvmaze';
import { useQuery } from 'react-query'
import ShowMainData from '../show/showMainData'
import ShowDetails from '../show/showDetails';
import ShowCast from '../show/showCast';
import ShowSeasons from '../show/showSeasons';
import styled from 'styled-components';
import { TextCenter } from '../Common/TextCenter';


function Show() {
  const { id } = useParams();

  const { data: showData, error } = useQuery({
    queryKey: ['show', id],
    queryFn: () => getShowById(id),
    refetchOnWindowFocus: false
  })



  if (!showData) {
    return <TextCenter>content is loading</TextCenter>
  }

  if (error) {
    return <TextCenter>error occured {error} </TextCenter>
  }

  return (
    <ShowPageWrapper>
      {/* this is show page <br /> */}
      {/* {showData.name}
      <img src={showData.image.medium} alt="images" /> */}
      <BackHomeWrapper>
        <Link to="/"> Go Back to Home </Link>
      </BackHomeWrapper>
      <ShowMainData
        image={showData.image}
        name={showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <ShowDetails
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        <ShowSeasons seasons={showData._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Casts</h2>
        <ShowCast casts={showData._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  )
}

export default Show


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
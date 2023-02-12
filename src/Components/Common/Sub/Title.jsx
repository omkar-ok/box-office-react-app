import React from 'react'
import styled from 'styled-components'

const Title = ( props ) => {
  return (
    <TitleWrapper className=''>
      <h1> {props.title} </h1>
      <p> {props.subtitle} </p>
    </TitleWrapper>
  )
}

export default Title

const TitleWrapper = styled.div`
  text-align: center;
  margin: 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
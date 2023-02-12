import React, { useState } from "react";
import ActorGrid from "../actors/ActorGrid";
import MainPageLayout from "../Common/MainPageLayout";
import { useQuery } from 'react-query'
import styled from "styled-components";

// import apiGet from "../misc/config";
import { searchForShows, searchForActors } from "../../api/tvmaze.js"
import ShowGrid from "../show/ShowGrid";
import { useSerchedName } from "../lib/useSearchedName";
import CustomRadio from "../CustomRadio";
import { TextCenter } from "../Common/TextCenter";

const Home = () => {
  const [input, setInput] = useSerchedName();
  const [searchOption, setSearchOption] = useState('shows');
  const [filter, setFilter] = useState(null);

  const { data: results, error } = useQuery({
    queryKey: ['searchshows', filter],
    queryFn: () => filter.searchOption === 'shows' ? searchForShows(filter.input) : searchForActors(filter.input),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  })
  
  const onSearch = ev => {
    ev.preventDefault();
    setFilter({input, searchOption})
  };

  const renderResults = () => {
    if(error){
      return <TextCenter>error occured: {error} </TextCenter>
    }
    if(input === ""){
      return <TextCenter></TextCenter>
    }
    if (results && results.length === 0) {
      return <TextCenter>NO Results for search " {input} " </TextCenter>;
    }
    if (results && results.length > 0) {
      return (results[0].show ?
        <ShowGrid data={results} /> : <ActorGrid data={results} />
      );
    }
  };

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  }

  return (
    <MainPageLayout
      children={
        <>
          <form onSubmit={onSearch} method='post' >
            <SearchInput
              id="input"
              type="text"
              onChange={onInputChange}
              placeholder="Search for something..."
              value={input}
              onKeyDown={onKeyDown}
            />

            <RadiosWrapper className="d-flex">
              <CustomRadio label="Shows" name="search-radio" id="shows-radio" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
              <CustomRadio label="Actors" name="search-radio" id="actors-radio" value="people" checked={searchOption === 'people'} onChange={onRadioChange} />
            </RadiosWrapper>
            <SearchButtonWrapper>
            <button type="submit" >
              {" "}
              Search{" "}
            </button>
            </SearchButtonWrapper>

            {renderResults()}
            </form>
        </>
      }
    ></MainPageLayout>
  );
};

export default Home;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
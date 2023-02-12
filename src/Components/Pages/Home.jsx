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
      return <div>error occured: {error} </div>
    }
    if(input === ""){
      return <div></div>
    }
    if (results && results.length === 0) {
      return <div>NO Results for search " {input} " </div>;
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
            <input
              id="input"
              type="text"
              onChange={onInputChange}
              placeholder="Search for something..."
              value={input}
              onKeyDown={onKeyDown}
            />
            <button type="submit" >
              {" "}
              Search{" "}
            </button>

            <div className="d-flex">
              <CustomRadio label="Shows" name="search-radio" id="shows-radio" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
              <CustomRadio label="Actors" name="search-radio" id="actors-radio" value="people" checked={searchOption === 'people'} onChange={onRadioChange} />
            </div>

            {renderResults()}
            </form>
        </>
      }
    ></MainPageLayout>
  );
};

export default Home;

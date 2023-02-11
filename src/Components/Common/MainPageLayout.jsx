import React from 'react'
import Title from "./Sub/Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title={"Box Office"} subtitle={"Are you looking for a movie or an actor?"} />
      <div className="container">
        {children}
      </div>
    </div >
  )
}

export default MainPageLayout

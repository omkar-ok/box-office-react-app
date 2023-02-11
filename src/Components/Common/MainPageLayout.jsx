import React from 'react'
import Header from '../Common/Header'
const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Header title={"My Title"} />
      <div className="container">
        {children}
      </div>
    </div >
  )
}

export default MainPageLayout

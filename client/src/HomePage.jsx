import React from 'react'
import HomeMbobile from './mobile/HomeMoblile'
import HomeDesktop from './desktop/HomeDesktop'
import HomeTablet  from './tablet/HomeTablet'

const HomePage = () => {
  return (
    <div>
        <HomeMbobile/>
        <HomeDesktop/>
        <HomeTablet/>
    </div>
  )
}

export default HomePage
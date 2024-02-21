import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home
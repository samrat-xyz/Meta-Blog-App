import React from 'react'
import Banner from '../../components/Banner/Banner'
import Blogs from '../Blogs/Blogs'
import AdsSection from '../../components/AdsSection/AdsSection'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Blogs></Blogs>
      <AdsSection></AdsSection>
    </div>
  )
}

export default Home

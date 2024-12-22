import React from 'react'
import Navbar from '../Components/Section/Navbar'
import Search from '../Components/Section/Search'
import Slider from '../Components/Section/Slider'
import Appslink from '../Components/Section/Appslink'
import Footer from '../Components/Section/Footer'
const Home = () => {
  return (
    < >
      <div className='bg-[#F8E4E4]'>
        <Navbar />
        <Search />
        <Slider />
        <Appslink />
        <Footer/>
      </div>
    </>
  )
}

export default Home
import React from 'react'
import Banner from '../../Components/Banner/Banner'
import './Home.css'
import Qoute from '../../Components/Qoute/Qoute'
import Projects from '../../Components/Projects/Projects'
import Skills from '../../Components/Skills/Skills'

const Home = () => {
  return (
    <div className='Home'>
      <Banner />
      <Qoute/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default Home
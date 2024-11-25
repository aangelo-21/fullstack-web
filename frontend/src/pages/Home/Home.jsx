import React from 'react'
import './Home.css'

import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate()

  const redirectUserNewTournament = () => {
    navigate('/NewTournament')
  }

  return <section id='home-container' >
    <div className='home-div'><button onClick={redirectUserNewTournament}>NewTournament</button></div>
    <div className='home-div' >Teams</div>
    <div className='home-div' >Favourites</div>
    <div className='home-div' >Pokedex</div>
  </section>
}

export default Home

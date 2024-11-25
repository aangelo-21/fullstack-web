import './Header.css'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const redirectUserHome = () => {
    navigate('/Home')
  }

  const redirectUserProfile = () => {
    navigate('/Profile')
  }

  return (
    <div>
      <div id="header">
        <button id="profile-button" onClick={redirectUserProfile}>
          <img src="/Pokeball.png" alt="" />
        </button>

        <button id="home-button" onClick={redirectUserHome}>
          <img
            id="home-button-image"
            src="/homepage-red-icon.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

export default Header

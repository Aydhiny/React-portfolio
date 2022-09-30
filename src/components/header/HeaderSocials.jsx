import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram/></a>
        <a href="https://dribbble.com" target="_blank"><FaDribbble/></a>
        
    </div>
  )
}

export default HeaderSocials
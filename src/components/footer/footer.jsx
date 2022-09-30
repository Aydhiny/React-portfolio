import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiFillDribbbleCircle} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PLANSIO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://dribbble.com"><AiFillDribbbleCircle/></a>
        <a href="https://instagram.com/plansio_central"><BsInstagram/></a>
        <a href="https://tiktok.com/plansio"><FaTiktok/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; PLANSIO Central. All rights erserved.</small>
      </div>
      </footer>
  )
}

export default footer
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Satisfied Customers</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>Over 50+ Completed</small>
            </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt dicta illo laborum eius voluptas nulla omnis aliquam, harum provident, hic, odit sed. Amet placeat ut ipsa, excepturi possimus expedita
              .</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
        
      </div> 
    </section>
  )
}

export default about
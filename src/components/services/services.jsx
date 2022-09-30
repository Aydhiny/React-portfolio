import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'
function services() {
  return (
    <section id='services'>
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Quality services that can elevate your brand </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Using your own images to fit on the design board </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Custom color schemes, palettes and fonts </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Cheap prices, best offers </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Fixing any inconveniences </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Websites, mobile design, logos </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>BONUS mailing list for other discount offers. </p>
            </li>
          </ul>
        </article>

        {/* END OF UI UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Social Media Marketing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Professionally crafted social media content posts </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Establishes amazing brand awareness, connests with other pages </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Answering all messages and gaining new customers </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Brand recognizable social media posts and carousels </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Marketing with ads (over 10,000+ estimated reach) </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Automatic messages </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Automatic posts scheduling at regular times daily </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Website connected links </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Boost sales over 50%+ </p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Animated Sites </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>3D Models Available on our websites </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Quality website templates </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Websites optimized for maximum client growth </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Beautiful color schemes </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Editable websites crafted in HTML, CSS, REACT and JavaScript </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Clean UI that attracts customers </p>
            </li>
          </ul>
        </article>

        {/* END OF SOCIAL MEDIA MARKETING */}
        </div> 
    </section>
  )
}

export default services
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'University Website Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19295534-Education-University-Website-Design'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Finance App UI Concept',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19295545-Dark-Financing-App-Design-Concept'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Productivity App Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19295524-Scheduling-App-Design-Concept'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Fast Food Delivery App Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19292967-Fast-Food-Delivery-App-Concept'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Meditation App Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19295473-Meditation-App-UI-Concept'
  },
  {
    id: 6,
    image: IMG6,
    title: 'E-Commerce App Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19295513-E-Commerce-App-Design'
  },
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Our Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
        })
      }
         
      </div>
    </section>
  )
}

export default portfolio
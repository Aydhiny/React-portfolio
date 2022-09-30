import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Neki Lik',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium voluptatibus placeat sed, voluptatum tempora esse officiis, quos, officia tenetur doloribus cumque quaerat exercitationem omnis repudiandae quasi pariatur dolore non.'
  },
  {
    avatar: AVTR2,
    name: 'Amer Mehmedovic',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium voluptatibus placeat sed, voluptatum tempora esse officiis, quos, officia tenetur doloribus cumque quaerat exercitationem omnis repudiandae quasi pariatur dolore non.'
  },
  {
    avatar: AVTR3,
    name: 'Krish UXUI',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium voluptatibus placeat sed, voluptatum tempora esse officiis, quos, officia tenetur doloribus cumque quaerat exercitationem omnis repudiandae quasi pariatur dolore non.'
  },
  {
    avatar: AVTR4,
    name: 'Hasan Brkic G',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium voluptatibus placeat sed, voluptatum tempora esse officiis, quos, officia tenetur doloribus cumque quaerat exercitationem omnis repudiandae quasi pariatur dolore non.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials
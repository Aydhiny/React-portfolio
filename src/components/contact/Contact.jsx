import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zb68rd7', 'template_vljl9ad', form.current, 'erlHBJUERRcQoCpGt')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch with us!</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>plansio.central@gmail.com</h5>
            <a href="mailto:plansio.central@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
            <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@Plansio_Central</h5>
            <a href="https://instagram.com/plansio_central" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+38762980029</h5>
            <a href="https://api.whatsapp.com/send?phone+38762980029" target="_blank">Send a message</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'

function experience() {
  return (
    <section id='experience'>
      <h5>What skills We Have</h5>
      <h2>Our Experience</h2>
        
        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Web Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginners</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Beginners</small>
                </div>
              </article>
            </div>
          </div>
          {/* END OF FRONTEND */}
          <div className='experience__backend'>
          <h3>UX/UI Design</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>FIGMA</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>Adobe XD</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>After Effects</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Beginners</small>
                </div>
              </article>
              <article className='experience__details'>
                <MdVerified className='experience__details-icon'/>
                <div>
                <h4>Spline 3D</h4>
                <small className='text-light'>Beginners</small>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default experience
import React from 'react'
import './experience.css'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Have Done</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div>
          <article className='experience'>
            <div className="experience__head">
          <h3>Tata Consultancy Services Ltd.</h3>
          <h5 className='text-light'>System Engineer</h5>
          </div>        
        <ul className="experience__list">
        <li>
          <p>
          Worked as a System Analyst in TCS in a Client project for 1 year 10 months. In which worked on SAP LMS and ServiceNow. (Client: EY, Project name: EY-HROSS).
          </p>
          
          
          </li>  
        </ul>

        </article>
        </div>
        
        </div>
      
    </section>
  )
}

export default Experience
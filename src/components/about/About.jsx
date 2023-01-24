import React from 'react'
import './about.css' 
import ME from '../../assets/SAVE_20200402_193403.jpg'
import {FaAward} from 'react-icons/fa'
import {FaIndustry} from 'react-icons/fa'
import {BsFolderFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About ME" />
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
          <BsFolderFill className='about__icon'/>
          <h5>Projects</h5>
          <small>2 Completed And Still Counting</small>
          </article>
          <article className='about__card'>
          <FaIndustry className='about__icon'/>
          <h5>Companies</h5>
          <small>1</small>
          </article>
        </div>
        <p>System Engineer with industry experience and hands on experience in Python, C++, Flask, MySQL, Java, HTML, CSS, Node.js, React.js and Bootstrap. Excellent listening and communication skills and able to adapt and improvise according to the job role. Experienced in working with team and delivering the task before deadline.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
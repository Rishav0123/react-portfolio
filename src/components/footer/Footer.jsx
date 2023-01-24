import React from 'react'
import './footer.css'
import {FiLinkedin} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'
import {SiFacebook} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">RISHAV_D</a>

      <ul className="premalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/Rishav Dutta" target="_blank" rel='noreferrer'><SiFacebook/></a>
        <a href="https://instagram.com/Rishav Dutta/" target="_blank" rel='noreferrer'><RiInstagramFill/></a>
        <a href="https://twitter.com/Rishav Dutta" target="_blank" rel='noreferrer'><FaTwitter/></a>
        <a href="www.linkedin.com/in/rishav-dutta-607" target="_blank" rel='noreferrer'><FiLinkedin/></a>
        <a href="https://github.com/Rishav0123" target="_blank" rel='noreferrer'><VscGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rishav_D. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
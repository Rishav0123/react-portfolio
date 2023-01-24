import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {SiAboutdotme} from 'react-icons/si'
import {FaAward} from 'react-icons/fa'
import {BsTools} from 'react-icons/bs'
import {BsFolderFill} from 'react-icons/bs'
import {MdOutlineContactPhone} from 'react-icons/md'
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaAward/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsTools/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsFolderFill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone/></a>

    </nav>
  )
}

export default Nav
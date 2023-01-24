import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {VscGithub} from 'react-icons/vsc'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rishav-dutta-607" target="_blank" rel='noreferrer'><FiLinkedin/></a>
        <a href="https://github.com/Rishav0123" target="_blank" rel='noreferrer'><VscGithub/></a>

    </div>

  )
}

export default HeaderSocials
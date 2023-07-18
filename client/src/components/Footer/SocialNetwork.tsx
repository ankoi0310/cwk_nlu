import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SocialNetwork = () => {
  return (
    <div className="flex justify-center">
      <Link to={'https://www.facebook.com/KOI0310.IT'} target={'_blank'} className={'mr-6 icon-link'}>
        <FaFacebookF />
      </Link>
      <Link to={'https://www.twitter.com/@ankoi0310'} target={'_blank'} className={'icon-link mr-6'}>
        <FaTwitter />
      </Link>
      <Link to={'https://www.instagram.com/ankoi.0310'} target={'_blank'} className={'icon-link mr-6'}>
        <FaInstagram />
      </Link>
      <Link to={'https://www.linkedin.com/in/ankoi0310'} target={'_blank'} className={'icon-link mr-6'}>
        <FaLinkedinIn />
      </Link>
      <Link to={'https://www.github.com/ankoi0310'} target={'_blank'} className={'icon-link mr-6'}>
        <FaGithub />
      </Link>
      <Link to={'https://www.youtube.com/Koi0310'} target={'_blank'} className={'icon-link'}>
        <FaYoutube />
      </Link>
    </div>
  )
}
export default SocialNetwork

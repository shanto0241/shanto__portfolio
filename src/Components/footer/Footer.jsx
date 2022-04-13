import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='#footer'>
      <footer>
      <h1>Shanto Da</h1>

          <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
       
        <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://twitter.com" target="_blank"><FaTwitterSquare /></a>

        </div>
        <div className="copyright">
        <small>&copy; All rights reserved</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer
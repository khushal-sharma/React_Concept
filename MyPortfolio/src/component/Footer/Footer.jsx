import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='icons'>
      <Link target='_blank' to='https://www.linkedin.com/in/khushal-sharma-b30a311a8/'>
        <i className="fa-brands fa-linkedin"></i>
      </Link>
      <Link target='_blank' to='https://github.com/khushal-sharma'>
        <i className="fa-brands fa-github"></i>

      </Link>
      <Link target='_blank'>
        <i className="fa-brands fa-twitter"></i>

      </Link>
      <Link target='_blank'>
        <i className="fa-brands fa-instagram"></i>

      </Link>
    </div>
  )
}

export default Footer

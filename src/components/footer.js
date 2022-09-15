import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <Link to="/" className="footer-navlink">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-image"
          />
        </Link>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-container1">
        <span className="footer-text">
          <span className="">Coded with❤️ from Grenada &amp; Trinidad </span>
          <br className=""></br>
        </span>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  image_src: '/playground_assets/kenice_logo_%401x-1400w.png',
  rootClassName: '',
  image_alt: 'logo',
}

Footer.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer

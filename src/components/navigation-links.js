import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/password-generator" className="navigation-links-navlink">
        {props.text}
      </Link>
      <a
        href="https://kenicenoel.com/blog"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text4}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'Password Generator',
  rootClassName: '',
  text4: 'Blog',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks

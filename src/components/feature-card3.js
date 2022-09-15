import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card3-image"
      />
      <h2 className="feature-card3-text">{props.title}</h2>
      <span className="feature-card3-text1">{props.description}</span>
    </div>
  )
}

FeatureCard3.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  title: 'Lorem ipsum',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

FeatureCard3.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard3

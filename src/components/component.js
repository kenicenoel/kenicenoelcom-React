import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className="component-link"
      >
        {props.text}
      </a>
    </div>
  )
}

AppComponent.defaultProps = {
  link_text: 'https://goto.kenicenoel.com/passgen',
  text: 'Generate a password\n',
  rootClassName: '',
}

AppComponent.propTypes = {
  link_text: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent

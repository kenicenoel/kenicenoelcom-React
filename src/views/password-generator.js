import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './password-generator.css'

const PasswordGenerator = (props) => {
  return (
    <div className="password-generator-container">
      <Helmet>
        <title>Password-Generator - Kenice Noel</title>
        <meta
          name="description"
          content="Personal space where I showcase my work, talk about my work and more"
        />
        <meta property="og:title" content="Password-Generator - Kenice Noel" />
        <meta
          property="og:description"
          content="Personal space where I showcase my work, talk about my work and more"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="password-generator-password-genie-row">
        <div className="password-generator-container1">
          <span className="password-generator-text">
            This tool allows you to generate secure passwords with varying
            lengths and allows the inclusion or exclusion of special characters,
            capital and common letters and numbers.
          </span>
        </div>
      </div>
      <div className="password-generator-container2">
        <iframe
          src="https://kenicenoel.github.io/PasswordGenie/"
          className="password-generator-iframe"
        ></iframe>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default PasswordGenerator

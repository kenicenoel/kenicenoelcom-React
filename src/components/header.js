import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-image"
        />
      </Link>
      <div className="header-nav">
        <NavigationLinks
          rootClassName="rootClassName15"
          className=""
        ></NavigationLinks>
      </div>
      <div className="header-icon-group">
        <a
          href="https://twitter.com/kenicenoel"
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <svg viewBox="0 0 950.8571428571428 1024" className="header-icon">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              className=""
            ></path>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/kenicenoel"
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="header-icon02">
            <path
              d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
              className=""
            ></path>
          </svg>
        </a>
        <a
          href="https://github.com/kenicenoel"
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="header-icon04">
            <path
              d="M296.571 685.714v0c1.143-1.714 0.571-5.143-1.714-7.429-2.857-2.286-6.286-2.857-8-1.143-1.143 1.714-0.571 5.143 1.714 7.429 2.857 2.286 6.286 2.857 8 1.143zM280.571 662.286c-1.714-2.286-4.571-3.429-6.857-2.286-1.714 1.143-1.714 4.571 0 6.857 2.286 2.857 5.143 4 6.857 2.857v0c1.714-1.143 1.714-4.571 0-7.429zM257.143 639.429v0c0.571-1.143-0.571-3.429-2.857-4.571-1.714-0.571-4-0.571-4.571 1.143-1.143 1.714 0 3.429 2.286 4.571 2.286 0.571 4.571 0.571 5.143-1.143zM269.143 652.571v0c1.143-1.143 1.143-4-1.143-5.714-1.714-2.286-4.571-2.857-5.714-1.714-1.714 1.714-1.143 4 0.571 6.286 1.714 1.714 4.571 2.857 6.286 1.143zM318.286 695.429v0c0.571-2.286-1.714-5.143-5.143-6.286s-6.286 0-7.429 2.286c-0.571 2.286 1.714 5.143 5.143 6.286s6.286 0 7.429-2.286zM342.286 697.143v0c0-2.286-2.857-4.571-6.857-4.571-3.429 0-5.714 2.286-5.714 4.571s2.857 4.571 6.286 4.571 6.286-2.286 6.286-4.571zM364.571 693.143v0c-0.571-2.286-4-3.429-7.429-2.857s-5.714 2.857-5.143 5.143 3.429 4 6.857 3.429 5.714-3.429 5.714-5.714zM731.429 512c0-161.714-130.857-292.571-292.571-292.571s-292.571 130.857-292.571 292.571c0 129.143 84 238.857 200 277.714 14.857 2.857 20-6.286 20-14.286 0-6.857 0-29.714-0.571-54.286 0 0-81.143 17.714-98.286-34.857 0 0-13.143-33.714-32.571-42.286 0 0-26.286-18.286 2.286-18.286 0 0 28.571 2.286 44.571 30.286 25.714 45.143 68.571 32 85.143 24.571 2.857-18.857 10.286-32 18.857-39.429-65.143-7.429-133.714-32.571-133.714-144.571 0-32 11.429-57.714 30.286-78.286-2.857-7.429-13.143-37.143 2.857-77.714 24.571-7.429 80.571 30.286 80.571 30.286 23.429-6.857 48-9.714 73.143-9.714s49.714 2.857 73.143 9.714c0 0 56-37.714 80.571-30.286 16 40.571 5.714 70.286 2.857 77.714 18.857 20.571 30.286 46.286 30.286 78.286 0 112.571-68.571 137.143-133.714 144.571 10.286 9.143 20 26.857 20 54.286 0 38.857-0.571 70.286-0.571 80 0 8 5.143 17.143 20 14.286 116-38.857 200-148.571 200-277.714zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
              className=""
            ></path>
          </svg>
        </a>
      </div>
      <div data-type="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-icon06">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-nav1">
          <div className="header-container">
            <NavigationLinks
              rootClassName="rootClassName16"
              className=""
            ></NavigationLinks>
            <div
              data-type="CloseMobileMenu"
              className="header-close-mobile-menu"
            >
              <svg viewBox="0 0 1024 1024" className="header-icon08">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="header-icon-group1">
          <svg viewBox="0 0 950.8571428571428 1024" className="header-icon10">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="header-icon12">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="header-icon14">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  image_src1:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  image_src: '/playground_assets/kenice_logo_%401x-1500w.png',
  image_alt: 'logo',
  rootClassName: '',
  image_alt1: 'image',
}

Header.propTypes = {
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Header

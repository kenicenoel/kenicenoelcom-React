import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard3 from '../components/feature-card3'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Kenice Noel</title>
        <meta
          name="description"
          content="Personal space where I showcase my work, talk about my work and more"
        />
        <meta property="og:title" content="Kenice Noel" />
        <meta
          property="og:description"
          content="Personal space where I showcase my work, talk about my work and more"
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <h1 className="home-text">👋🏾Hello! I&apos;m Kenice.</h1>
        <span className="home-text01">
          <br></br>
          <span>
            I&apos;m a full stack developer building mobile and web apps.
            Learning is a passion of mine so I&apos;m always looking forward to
            what&apos;s next. I&apos;m also a podcast and audiobook junkie.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Give my blog a read while you’re here. I post things about my life,
            my development stories and things that interest me. Are you part of
            a cause or non-profit? Get in touch! I love volunteering my time for
            a good cause.
          </span>
        </span>
      </div>
      <div className="home-coding-for-a-cause">
        <div className="home-container1">
          <div className="home-container2">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-a3bf-200h.png"
              className="home-pasted-image"
            />
            <span className="home-text06">
              <span>
                I worked alongside the amazing team at ChildLine to redesign and
                relaunch their website. The website now features a live chat
                service, booking counseling sessions and much more.
              </span>
              <br></br>
              <br></br>
              <span>
                Additionally, I partnered with ChildLine and UNICEF Eastern
                Caribbean to develop and launch the My ChildLine app on Android
                and iOS. It provides fast access to ChildLine’s services for
                children in need of support. The app is free and provides quick
                access to ChildLine&apos;s 24/7 Helpline, live chat and
                counselling services. A handful of classic games is also
                available and resources such as emergency services, welfare,
                police and more are also available. A private diary is available
                as well as a mood tracker. Children are also encouraged to learn
                about the UN Convention on the rights of the child right from
                the app. The app also supports the migrant community with
                Spanish and French translations.
              </span>
              <br></br>
              <br></br>
              <span>
                I also partnered with ChildLine to launch their new online
                course platform which allows anyone to take courses from Mental
                Health &amp; Awareness to Laws and Childrens&apos; rights. Each
                short course also provides a certificate on successful
                completion. Learning is part of their digital strategy to
                educate and empower children, young persons and their families
                throughout Trinidad and Tobago to become proactive in the care
                and support of children.
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-features">
        <h1 className="home-text15 heading">
          <span>Apps i&apos;ve built</span>
          <br></br>
        </h1>
        <div className="home-container3">
          <a
            href="https://play.google.com/store/apps/details?id=org.childlinett.app&amp;hl=en&amp;gl=US"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FeatureCard3
              title="My ChildLine"
              description="Access FREE live chat, 24 hr helpline and counselling services"
              rootClassName="rootClassName"
              image_src="/playground_assets/app_icon_android-200h.png"
              className="home-component1"
            ></FeatureCard3>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.rpmexpresscouriers.MyRPM&amp;hl=en&amp;gl=US"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FeatureCard3
              title="My RPM"
              description="View packages, pay invoices and manage your account"
              rootClassName="rootClassName3"
              image_src="/playground_assets/my_rpm-200h.webp"
              className="home-component2"
            ></FeatureCard3>
          </a>
          <a
            href="https://thehartt.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FeatureCard3
              title="D'Corner"
              description="Tranforming the public transportation landscape in T&amp;T"
              rootClassName="rootClassName5"
              image_src="/playground_assets/d_logo-200h.png"
              className="home-component3"
            ></FeatureCard3>
          </a>
          <FeatureCard3
            title="Package Master"
            description="Skybox and  air freight management software."
            rootClassName="feature-card3-root-class-name1"
            image_src="/playground_assets/logo_blue-200h.png"
          ></FeatureCard3>
        </div>
      </div>
      <div className="home-brands-section">
        <h1 className="home-text18 heading">Brands I&apos;ve helped</h1>
        <div id="brand_logos" className="home-container4">
          <img
            alt="image"
            src="/playground_assets/pastedimage-8m0v-200h.png"
            className="home-image brand-image"
          />
          <img
            alt="image"
            src="/playground_assets/pastedimage-a3bf-200h.png"
            className="home-image1 brand-image"
          />
          <img
            alt="image"
            src="/playground_assets/rpm%20logo%20-%20original-200h.png"
            className="home-image2 brand-image"
          />
          <img
            alt="image"
            src="/playground_assets/solono_logo_full-200h.png"
            className="home-image3 brand-image"
          />
          <img
            src="/playground_assets/hartt-faw-01-200h.png"
            alt="image"
            className="home-image4 brand-image"
          />
        </div>
      </div>
      <div className="home-container5">
        <h1 className="home-text19 heading">
          Say hi, and I&apos;ll say hi back
        </h1>
        <iframe
          src="https://formaloo.net/a0at7"
          className="home-iframe"
        ></iframe>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Home

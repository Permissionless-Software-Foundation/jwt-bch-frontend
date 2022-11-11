import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import faucet from '../assets/images/faucet.png'

class Homepage extends React.Component {
  render () {
    const siteTitle = 'Examples - Get Started Quickly'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id='one' className='main style1'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <center>
                <h2 style={{ padding: '25px' }}>Get Started Quick</h2>
              </center>

              <p>
                These bite-sized example applications show you how to create a
                wallet, send BCH, create SLP tokens, read and write text to the
                blockchain, and more. Each example acts like a lego block,
                showing you how to build your way towards common business
                solutions.
              </p>
            </div>
            <div className='col-6'>
              <center>
                <h2>
                  <span className='icon style1 major fas fa-code' />
                </h2>
                <ul className='actions uniform'>
                  <li>
                    <a
                      href='https://github.com/Permissionless-Software-Foundation/psf-js-examples'
                      target='_blank'
                      className='button' rel='noreferrer'
                    >
                      View Examples on GitHub
                    </a>
                  </li>
                </ul>
              </center>
            </div>
          </div>
        </section>

        <section id='four' className='main style1 special'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <header className='major'>
                <h2>Getting Started Tutorial</h2>
              </header>
              <div className='youtube-responsive-container'>
                <iframe
                  title='Bitcoin Cash Full Stack Introduction'
                  src='https://www.youtube.com/embed/GD2i1ZUiyrk'
                  frameBorder='0'
                  allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div>

            <div className='col-6'>
              <header className='major'>
                <h2>Increasing Rate Limits</h2>
              </header>
              <div className='youtube-responsive-container'>
                <iframe
                  title='Using a JWT Token with FullStack.cash'
                  src='https://www.youtube.com/embed/27h-KiS-dPg'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section id='three' className='main style2 special'>
          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h2>Want More? Check this out.</h2>
              </header>
              <p>
                The examples above are great to start with, but they are a long
                way from turn-key business solutions. These more advanced
                examples allow you to quickly integrate Bitcoin Cash and SLP
                tokens into your application.
              </p>
            </div>

            <div className='col-6' style={{ marginTop: '75px' }}>
              <span className='image fit'>
                <span className='icon style6 major fas fa-telescope fa-code-branch' />
              </span>
              <h3>Code Examples</h3>
              <p>
                These bite-sized example applications show you how to create a
                wallet, send BCH, create SLP tokens, read and write text to the
                blockchain, and more. Each example acts like a lego block,
                showing you how to build your way towards common business
                solutions.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/psf-js-examples'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6' style={{ marginTop: '75px' }}>
              <span className='image fit'>
                <span className='icon style1 major fas fa-binoculars' />
              </span>
              <h3>Explorer UI</h3>
              <p>
                Visually interact with the FullStack.cash REST API. Great for
                debugging and exploring the potential of apps interacting
                directly with the blockchain. Each endpoint is covered in more
                detail by the <a href='/documentation'>bch-api documentation</a>
                .
              </p>
              <ul className='actions'>
                <li>
                  <a href='/explore-bchn' className='button'>
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6' style={{ marginTop: '75px' }}>
              <span className='image fit'>
                <span className='icon style2 major fas fa-cog' />
              </span>
              <h3>Automatic JWT Handling</h3>
              <p>
                This demo app shows how to integrate automatic JWT token
                handling into your application. All you need to worry about is
                topping up your FullStack.cash account with BCH. This app will
                automatically validate, retrieve, and renew the JWT access token
                for the our API.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/jwt-bch-demo'
                    target='_blank'
                    className='button' rel='noreferrer'
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6' style={{ marginTop: '75px' }}>
              <span className='image fit'>
                <span className='icon style3 major fas fa-wallet' />
              </span>
              <h3>PSF BCH Wallet</h3>
              <p>
                This powerful command-line wallet handles BCH and SLP tokens,
                it contains commands for creating all different kinds of tokens,
                sending encrypted messages, and many other useful features. Because
                there is no graphical user interface (GUI), its a great platform
                for rapid prototying. The code behind each command is self-contained,
                and makes for advanced code examples.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/psf-bch-wallet'
                    target='_blank'
                    className='button' rel='noreferrer'
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id='four' className='main style2 special'>
          <div className='container'>
            <ul className='actions uniform'>
              <li>
                <a href='/profile' className='button special'>
                  Sign Up
                </a>
              </li>
              <li>
                <a href='/documentation' className='button'>
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Homepage

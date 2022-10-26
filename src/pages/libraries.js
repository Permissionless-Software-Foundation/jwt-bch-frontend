import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import libraries from '../assets/images/libraries.jpg'

class Homepage extends React.Component {
  render () {
    const siteTitle = 'JS Libraries | FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id='one' className='main style1'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <header className='major'>
                <h2>Libraries: Supercharge Your Application</h2>
              </header>
              <p>
                JavaScript{' '}
                <a href='https://npmjs.com' target='_blank' rel='noreferrer'>
                  npm libraries
                </a>{' '}
                act as middleware 'glue' to tie the front-end application to the
                back-end infrastructure. They also allow developers to
                supercharge their applications with new featuers, and then share
                those features with other devlepers and applications.
              </p>
              <p>
                <a
                  href='https://github.com/Permissionless-Software-Foundation/bch-js'
                  target='_blank' rel='noreferrer'
                >
                  bch-js
                </a>{' '}
                is the primary JavaScript library for interacting with a
                blockchain, but FullStack.cash maintains several additional
                libraries for specific blockchain use cases. This page lists the
                most popular and important libraries we maintain.
              </p>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={libraries} alt='' />
              </span>
            </div>
          </div>
        </section>

        <section id='three' className='main style2 special'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <h3>
                <b>bch-js</b>
              </h3>
              <p>
                bch-js is the primary JavaScript library maintained by
                FullStack.cash. It provides a convient way to leverage the
                bch-api REST API, and it also includes many handy utilities for
                generating wallets and addresses, signing messages, doing
                encryption, and many other valuable features. All other
                libraries on this page depend on this base library.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://www.npmjs.com/package/@psf/bch-js'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Library
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>jwt-bch-lib</b>
              </h3>
              <p>
                A library for handling FullStack.cash JWT tokens. This library
                enables your app to automatically renew JWT tokens as-needed.
                This allows your app to 'just work', so long as your account has
                credit to pay for new JWT tokens.
              </p>
              <p>
                Watch{' '}
                <a href='https://youtu.be/27h-KiS-dPg' target='_blank' rel='noreferrer'>
                  this video
                </a>{' '}
                for more information.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://www.npmjs.com/package/jwt-bch-lib'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Library
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>slp-cli-wallet</b>
              </h3>
              <p>
                This command-line wallet is a handy tool for rapidly prototyping
                ideas. Because there is no graphical user interface, the burden
                for trying new ideas is greatly reduced. It works on both the
                BCH and eCash blockchains.
              </p>
              <p>
                This is a HD wallet with full support for SLP and NFT tokens.
                It's also an npm library that can be easily added to your own
                applications to infuse them with same wallet capabilities.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/slp-cli-wallet'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>avax-cli-wallet</b>
              </h3>
              <p>
                This is a fork of slp-cli-wallet, but modified to work with the{' '}
                <a href='https://avax.network' target='_blank' rel='noreferrer'>
                  Avalanche blockchain
                </a>
                . It contains many of the same commands for sending AVAX and
                tokens (ANTs) on their X-chain. It includes HD wallet
                functionality.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/avax-cli-wallet'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>bch-message-lib</b>
              </h3>
              <p>
                A utility library encomposing much of the functionality provided
                by{' '}
                <a href='https://message.fullstack.cash' target='_blank' rel='noreferrer'>
                  message.FullStack.cash
                </a>
                . It can detect and read blockchain messages utilizing the{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps001-media-sharing.md'
                  target='_blank' rel='noreferrer'
                >
                  PS001
                </a>{' '}
                spec. This library is also used for calculating merit for
                'staking' token.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://www.npmjs.com/package/bch-message-lib'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Library
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>bch-encrypt-lib</b>
              </h3>
              <p>
                A small utility library for encrypting and decrypting data,
                using the same eliptic curve cryptography used by the Bitcoin
                protocol.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://www.npmjs.com/package/bch-encrypt-lib'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Library
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>minimal-slp-wallet</b>
              </h3>
              <p>
                A lightweight, single-address wallet library for Bitcoin Cash.
                Optimized for front-end (web browser) use. This is the BCH
                wallet 'engine' used in the Gatsby Theme behind{' '}
                <a href='https://wallet.fullstack.cash' target='_blank' rel='noreferrer'>
                  wallet.fullstack.cash
                </a>{' '}
                and our <a href='/front-end'>front-end software</a>.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://www.npmjs.com/package/minimal-slp-wallet'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Library
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id='four' className='main style3 special'>
          <div className='container'>
            <header className='major'>
              <h2>Ready to get started?</h2>
            </header>
            <ul className='actions uniform'>
              <li>
                <a href='/profile' className='button special'>
                  Sign Up
                </a>
              </li>
              <li>
                <a href='/examples' className='button'>
                  Example Code
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

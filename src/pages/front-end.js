import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render () {
    const siteTitle = 'Front-End Dev | FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id='one' className='main style1'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <header className='major'>
                <h2>Front-End: Web & Phone Apps</h2>
              </header>
              <p>
                Learn how to fork{' '}
                <a href='wallet.fullstack.cash' target='_blank'>
                  wallet.fullstack.cash
                </a>{' '}
                to build your own custom web or phone app that can interact with
                the Bitcoin Cash or eCash blockchains.
              </p>
              <p>
                The web wallet is based on{' '}
                <a href='https://create-react-app.dev/' target='_blank' rel='noreferrer'>
                  React
                </a>.{' '}
                We provide boilerplates,
                plugins, and example apps. Your app can be compiled into native iOS and
                Android apps using{' '}
                <a href='https://capacitorjs.com/' target='_blank' rel='noreferrer'>
                  Capacitor
                </a>
                .
              </p>
            </div>
            <div className='col-6'>
              <h4>
                These graduated boilerplates start simple and increasingly
                add features. They are all based
                on <a href='https://create-react-app.dev/' target='_blank' rel='noreferrer'>Create
                  React App
                   </a> and <a href='https://react-bootstrap.github.io/' target='_blank' rel='noreferrer'>React Bootstrap</a>.
              </h4>
              <ul>
                <li>
                  <a href='https://github.com/Permissionless-Software-Foundation/react-bootstrap-web3-spa' target='_blank' rel='noreferrer'>
                    react-bootstrap-web3-spa
                  </a> - Single Page App (SPA) integrating <a href='https://www.npmjs.com/package/minimal-slp-wallet' target='_blank' rel='noreferrer'>minimal-slp-wallet</a>.
                </li>
                <li>
                  <a href='https://github.com/Permissionless-Software-Foundation/react-bootstrap-web3-android' target='_blank' rel='noreferrer'>
                    react-bootstrap-web3-android
                  </a> - Same as above, but with <a href='https://capacitorjs.com/' target='_blank' rel='noreferrer'>CapacitorJS</a> integrated
                  to convert the web app to a native Android APK.
                </li>
                <li>
                  <a href='https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-android' target='_blank' rel='noreferrer'>
                    bch-wallet-web3-android
                  </a> - Based on the above two libraries. A full-features web wallet for Bitcoin Cash.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id='two' className='main style2 special'>
          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h2>React Boilerplates</h2>
              </header>
              <p>
                Armed with an understanding of React and the boilerplates below,
                you can quickly build your own Bitcoin Cash web app. You can even
                compile it into an Anroid or iOS native application.
              </p>
            </div>

            <div className='col-4'>
              <h3>
                <b>react-bootstrap-web3-spa</b>
              </h3>
              <p>
                A React boilerplate to get you started quickly.
                This boilerplate
                integrates <a href='https://www.npmjs.com/package/minimal-slp-wallet' target='_blank' rel='noreferrer'>minimal-slp-wallet</a> for
                talking
                to the Bitcoin Cash blockchain. It can query balances,
                convert addresses, generate paper wallets, and other small,
                useful features. It's a great place to start!
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://permissionless-software-foundation.github.io/react-bootstrap-web3-spa/'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Live Demo
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/react-bootstrap-web3-spa'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-4'>
              <h3>
                <b>react-bootstrap-web3-android</b>
              </h3>
              <p>
                This is the same boilerplate as react-bootstrap-web3-spa, but
                with <a href='https://capacitorjs.com/' target='_blank' rel='noreferrer'>CapacitorJS</a> integrated
                to convert the web app to a native Android APK. Using this boilerplate
                will allow you to build your own Android or iOS app.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/react-bootstrap-web3-android/raw/master/apk/react-bootstrap-web3.apk'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    APK File
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/react-bootstrap-web3-android'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-4'>
              <h3>
                <b>bch-wallet-web3-android</b>
              </h3>
              <p>
                Adapted from the previous two boilerplates, this is a full-features web
                wallet for Bitcoin Cash. It's ready to re-brand and hack for your
                own purposes, and it's ready to be compiled into an Android APK.
                Use this boilerplate to spend more time building, and less time
                reinventing basic web wallet features.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://bchn-wallet.fullstack.cash'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Live Demo
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-android'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id='three' className='main style3 special'>
          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h2>Example Web Apps</h2>
              </header>
              <p>
                These are just a few of the web apps that have been built with
                the tools above.
              </p>
            </div>

            <div className='col-4'>
              <h3>
                <b>Wallet.FullStack.cash</b>
              </h3>
              <p>
                Our official wallet includes the ability to sweep coins and
                tokens from a{' '}
                <a
                  href='https://paperwallet.fullstack.cash/'
                  target='_blank' rel='noreferrer'
                >
                  paper wallet
                </a>
                , utilizing{' '}
                <a
                  href='https://www.npmjs.com/package/bch-token-sweep'
                  target='_blank' rel='noreferrer'
                >
                  this sweep library
                </a>
                .
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://bchn-wallet.fullstack.cash/'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-4'>
              <h3>
                <b>BCH DEX</b>
              </h3>
              <p>
                Buy and sell NFTs and fungible tokens. This decentralized
                exchange is <i>trustless</i>, <i>peer-to-peer</i>, and <i>atomic</i>.
                This web app allows for permissionless, non-KYC trading of
                tokens on multiple blockchains.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://dex.fullstack.cash/'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-4'>
              <h3>
                <b>NFT Creator</b>
              </h3>
              <p>
                NFTs are the future of digital assets.
                Creating NFTs needs to be cheap and easy.
                This app let's you create an NFT in a few seconds for only a
                few cents of BCH.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://nft-creator.fullstack.cash/'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-4'>
              <h3>
                <b>NFT Collector</b>
              </h3>
              <p>
                What good is it to create NFTs if you can't show them off?!
                The NFT Collector app will display any NFTs held by a Bitcoin
                Cash address.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://nft-collector.fullstack.cash/?addr=bitcoincash:qzsgnyd826c6xw5y3y4ct6q2gvf3r8fmkqfvtzn6ef'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-4'>
              <h3>
                <b>Paper Wallets</b>
              </h3>
              <p>
                This is a simple app that generates a new paper wallet every time
                the page is reloaded. These can be printed out to store BCH
                and tokens. It's also a great way to gift BCH and tokens to
                others.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://paperwallet.fullstack.cash/'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-4'>
              <h3>
                <b>Address Converter</b>
              </h3>
              <p>
                A simple app that converts common cryptocurrency addresses into
                other formats. It's a useful tool for developers that work
                on multiple Bitcoin forks.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://address.fullstack.cash'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id='five' className='main style3 special'>
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

/*
  Code Pen - holds old code

  <div className="youtube-responsive-container">
    <iframe
      title="Create Your Own BCH or eCash Web Wallet"
      src="https://www.youtube.com/embed/G7ptg7VIRnk"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

  <section id='four' className='main style2 special'>
    <div className='grid-wrapper'>
      <div className='col-12'>
        <header className='major'>
          <h2>Plugins</h2>
        </header>
        <p>
          These are the top plugins developed by the PSF community, which
          you can use to enhance your own web wallet app.
        </p>
      </div>

      <div className='col-4'>
        <h3>
          <b>gatsby-plugin-bch-sweep</b>
        </h3>
        <p>
          Unlocks the ability to 'sweep'{' '}
          <a href='https://paperwallet.bitcoin.com/' target='_blank' rel='noreferrer'>
            coin paper wallets
          </a>{' '}
          and{' '}
          <a
            href='https://slp-paper-wallet.fullstack.cash/'
            target='_blank' rel='noreferrer'
          >
            token paper wallets
          </a>
          . A conveniant 'cold storage' option, and a great way to share
          assets with the crypto-currious.
        </p>
        <ul className='actions'>
          <li>
            <a
              href='https://github.com/Permissionless-Software-Foundation/gatsby-plugin-bch-sweep'
              className='button'
              target='_blank' rel='noreferrer'
            >
              Code
            </a>
          </li>
        </ul>
      </div>
      <div className='col-4'>
        <h3>
          <b>gatsby-plugin-bch-sign</b>
        </h3>
        <p>
          Cryptographically sign a message. The output of this plugin can
          be used to prove ownership of an address. Useful for proving
          ownership of a token.
        </p>
        <ul className='actions'>
          <li>
            <a
              href='https://github.com/Permissionless-Software-Foundation/gatsby-plugin-bch-sign'
              className='button'
              target='_blank' rel='noreferrer'
            >
              Code
            </a>
          </li>
        </ul>
      </div>
      <div className='col-4'>
        <h3>
          <b>bch-wallet-plugin-postoffice</b>
        </h3>
        <p>
          The front-end component for communitcating with the{' '}
          <a
            href='https://github.com/Permissionless-Software-Foundation/postoffice.fullstack.cash'
            target='_blank' rel='noreferrer'
          >
            Post Office back end
          </a>
          . Allows a native token experience, by removing BCH transaction
          fees.
        </p>
        <ul className='actions'>
          <li>
            <a
              href='https://github.com/Permissionless-Software-Foundation/bch-wallet-plugin-postoffice'
              className='button'
              target='_blank' rel='noreferrer'
            >
              Code
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
*/

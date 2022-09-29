import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import telegram from '../assets/images/telegram-200px.png'
import fullstackLogo from '../assets/images/fullstackcash-Grey.png'
import walletThumbnail from '../assets/images/wallet-fullstack-thumbnail.png'
import nftCreatorThumbnail from '../assets/images/nft-creator-thumbnail.png'
// import nftCollectorThumbnail from '../assets/images/nft-collector-thumbnail.png'
import nftCollectorThumbnail from '../assets/images/nft-collector.gif'
import bchDexThumbnail from '../assets/images/bch-dex-thumbnail.png'

class Portfolio extends React.Component {
  render () {
    const siteTitle = 'Consulting'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id='three' className='main style1 special'>
          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h2>Crypto Apps Built by FullStack.cash</h2>
              </header>
            </div>

            <div className='col-12'>
              <p>
                This page is a collection of apps built by FullStack.cash. These
                are examples of the kinds of apps we build for clients. All apps
                on this page are open source, and we encourage companies to copy{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation'
                  target='_blank'
                >
                  our code
                </a>
                . We <a href='/consulting'>can be hired</a> to build apps for
                you too.
              </p>
            </div>
          </div>

          <div
            className='grid-wrapper'
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className='col-6' style={{ padding: '20px' }}>
              <span className='image fit'>
                <a href='http://bchn-wallet.fullstack.cash' target='_blank'>
                  <img
                    style={{ maxWidth: '600px' }}
                    src={walletThumbnail}
                    alt=''
                  />
                </a>
              </span>
            </div>

            <div className='col-6' style={{ padding: '20px' }}>
              <h3>Wallet.FullStack.cash</h3>
              <p>
                Our open source, white-label wallet. It provides a foundation
                upon which to build additional functionality. We encourage
                developers and businesses to fork this code base and customize
                it for their own needs.
              </p>
              <p>This wallet app provides the following basic functionality:</p>
              <ul style={{ textAlign: 'left' }}>
                <li>Create or import new wallets using a 12-word mnemonic.</li>
                <li>Send and receive BCH.</li>
                <li>Send and recieve tokens, including NFTs.</li>
                <li>Sweep BCH or tokens from a paper wallet.</li>
              </ul>

              <ul className='actions'>
                <li>
                  <a
                    href='https://bchn-wallet.fullstack.cash'
                    target='_blank'
                    className='button'
                  >
                    Live Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />

          <div className='grid-wrapper' style={{ border: 'solid 1px black' }}>
            <div className='col-6' style={{ padding: '20px' }}>
              <span className='image fit'>
                <a href='https://nft-creator.fullstack.cash/' target='_blank'>
                  <img
                    style={{ maxWidth: '600px' }}
                    src={nftCreatorThumbnail}
                    alt=''
                  />
                </a>
              </span>
            </div>

            <div className='col-6' style={{ padding: '20px' }}>
              <h3>NFT Creator</h3>
              <p>
                NFTs are the future of digital assets. They can represent
                anything from concert tickets, to works of art, to news items,
                to membership in a club, to just about anything you can imagine.
                Creating NFTs needs to be cheap and easy. This app let's you
                create an NFT in a few seconds for only a few cents of BCH.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://nft-creator.fullstack.cash/'
                    target='_blank'
                    className='button'
                  >
                    Live Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />

          <div className='grid-wrapper' style={{ border: 'solid 1px black' }}>
            <div className='col-6' style={{ padding: '20px' }}>
              <span className='image'>
                <a
                  href='https://nft-collector.fullstack.cash/?addr=bitcoincash:qzsgnyd826c6xw5y3y4ct6q2gvf3r8fmkqfvtzn6ef'
                  target='_blank'
                >
                  <img
                    style={{ maxWidth: '600px' }}
                    src={nftCollectorThumbnail}
                    alt=''
                  />
                </a>
              </span>
            </div>

            <div className='col-6' style={{ padding: '20px' }}>
              <h3>NFT Collector</h3>
              <p>What good is it to create NFTs if you can't show them off?!</p>
              <p>
                The NFT Collector app will display any NFTs held by a Bitcoin
                Cash address. The address can be passed as part of the URL,
                which makes it easy to share on social media.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://nft-collector.fullstack.cash/?addr=bitcoincash:qzsgnyd826c6xw5y3y4ct6q2gvf3r8fmkqfvtzn6ef'
                    target='_blank'
                    className='button'
                  >
                    Live Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />

          <div className='grid-wrapper' style={{ border: 'solid 1px black' }}>
            <div className='col-6' style={{ padding: '20px' }}>
              <span className='image fit'>
                <a href='https://dex.fullstack.cash/' target='_blank'>
                  <img
                    style={{ maxWidth: '600px' }}
                    src={bchDexThumbnail}
                    alt=''
                  />
                </a>
              </span>
            </div>

            <div className='col-6' style={{ padding: '20px' }}>
              <h3>Decentralized Exchange (DEX)</h3>
              <p>
                FullStack.cash and the PSF are in the process of building out a
                decentralized exchange (DEX) for trading tokens on the BCH,
                eCash, and AVAX blockchains. These DEX's can be used to buy and
                sell fungible tokens and NFTs.
              </p>
              <p>
                The protocol we've developed is <i>trustless</i>, <i>atomic</i>,{' '}
                <i>non-custodial</i>, and <i>peer-to-peer</i>. These are
                important qualities that distinguish it from other DEXs in the
                industry. Learn more by visiting the demo.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://dex.fullstack.cash/'
                    target='_blank'
                    className='button'
                  >
                    Live Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className='grid-wrapper'>
            <div className='col-12'>
              <p>
                This page is a collection of apps built by FullStack.cash. These
                are examples of the kinds of apps we build for clients. All apps
                on this page are open source, and we encourage companies to copy{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation'
                  target='_blank'
                >
                  our code
                </a>
                . We <a href='/consulting'>can be hired</a> to build apps for
                you too.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Portfolio

import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import telegram from '../assets/images/telegram-200px.png'
import fullstackLogo from '../assets/images/fullstackcash-Grey.png'
import walletThumbnail from '../assets/images/wallet-fullstack-thumbnail.png'

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
                on this page are open source, and we encourage companies to copy
                our code.
              </p>
            </div>
          </div>

          <div
            className='grid-wrapper'
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className='col-6' style={{ padding: '20px' }}>
              <span className='image'>
                <img style={{ maxWidth: '600px' }} src={walletThumbnail} alt='' />
              </span>
            </div>

            <div className='col-6' style={{ padding: '20px' }}>
              <h3>Wallet.FullStack.cash</h3>
              <p>
                This is our open source, white-label wallet. It provides a
                foundation upon which to build additional functionality. We
                encourage developers and businesses to fork this code base and
                customize it for their own needs.
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
              <a
                href='https://t.me/slp_devs_for_hire'
                style={{ borderBottom: 'none' }}
              >
                <span className='image'>
                  <img src={telegram} alt='' />
                </span>
                <h3>SLP Token Devs for Hire</h3>
              </a>
            </div>

            <div className='col-6' style={{ padding: '20px' }}>
              <p>
                This Telegram channel is moderated by staff from FullStack.cash.
                It was created for entrepreneurs to find developers who have
                experience with SLP tokens and Bitcoin Cash. It's a simple, free
                way for you to find an independent developer or your next
                employee.
              </p>

              <ul className='actions'>
                <li>
                  <a href='https://t.me/slp_devs_for_hire' className='button'>
                    Join
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
              <header className='major'>
                <h3>Need an Online Store? We've got you covered.</h3>
              </header>
            </div>

            <div className='col-12'>
              <p>
                Many business owners simply need an online shopping cart where
                customers can purchase goods for Bitcoin Cash. We can install a
                simple Wordpress store that allows you to display goods, and
                allows customers to pay in Bitcion Cash.
              </p>
              <br />
              <a href='https://bchstore.com' className='button'>
                See Demo
              </a>
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h3>Need Something More Advanced? We've got that too.</h3>
              </header>
            </div>

            <div className='col-12'>
              <p>
                We can build custom crypto apps for your business too. We
                generally build web-apps first, and then compile them into
                Android and iOS apps. Here are a few examples:
              </p>

              <ul>
                <li>
                  <a href='https://bchn-wallet.fullstack.cash' target='_blank'>
                    BCH and SLP token wallet
                  </a>
                </li>
                <li>
                  <a href='https://nft-creator.fullstack.cash/' target='_blank'>
                    NFT Creator
                  </a>
                </li>
                <li>
                  <a href='https://dex-demo.fullstack.cash' target='_blank'>
                    Decentralized Exchange (DEX) for tokens
                  </a>
                </li>
              </ul>

              <p>
                Here is a list of custom services that FullStack.cash offers:
              </p>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Architecture</b>: Designing the infrastructure and
                  communication flow for a custom app for your business
                </li>
                <li>
                  <b>App development</b>: Building custom apps for your business
                </li>
                <li>
                  <b>Infrastructure</b>: Setup and management of crypto
                  infrastructure for your business
                </li>
                <li>
                  <b>Developer recruitment</b>: We can help you find developers
                  to hire
                </li>
                <li>
                  <b>Developer screening</b>: Testing the skills of potential
                  hires
                </li>
                <li>
                  <b>Developer management</b>: Project management and
                  coordinating work among a team
                </li>
              </ul>

              <p>
                Read more about our management and development practices in
                these blog posts:
              </p>
              <ul>
                <li>
                  <a
                    href='https://christroutner.github.io/trouts-blog/blog/managing-app-development/'
                    target='_blank'
                  >
                    Managing App Development
                  </a>
                  .
                </li>
                <li>
                  <a
                    href='https://christroutner.github.io/trouts-blog/blog/software-development-process'
                    target='_blank'
                  >
                    Our Software Development Process
                  </a>
                  .
                </li>
              </ul>

              <p>
                But we can't do it all. Some skills are outside our expertise.
                When these are needed, we can help you find additional resources
                for your project, but FullStack.cash can not take responsiblity
                for the execution:
              </p>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Design</b>: color pallets, graphics, and aesthetics
                </li>
                <li>
                  <b>Native apps</b>: We can build an app for iOS and Android,
                  but not with native features like the camera or NFC.
                </li>
                <li>
                  <b>Website development</b>: We focus on crypto apps, not on
                  websites. A lot of other contractors can do this.
                </li>
                <li>
                  <b>General apps</b>: We focus on crypto apps. If the app
                  doesn't involve cryptocurrency, we'll help you partner with a
                  general app design company.
                </li>
                <li>
                  <b>App stores</b>: We can not help you get your app into the
                  iOS or Google app stores. That is often a full-time job in
                  itself.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Portfolio
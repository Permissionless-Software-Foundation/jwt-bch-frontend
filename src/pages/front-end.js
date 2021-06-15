import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Front-End Dev | FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Front-End: Web & Phone Apps</h2>
              </header>
              <p>
                Learn how to fork{' '}
                <a href="wallet.fullstack.cash" target="_blank">
                  wallet.fullstack.cash
                </a>{' '}
                to build your own custom web or phone app that can interact with
                the BCH or eCash blockchains.
              </p>
              <p>
                The web wallet is based on the{' '}
                <a href="https://www.gatsbyjs.com/" target="_blank">
                  Gatsby
                </a>{' '}
                framework using React components. We provide Starters, Themes,
                and Plugins, and the app can be compiled into native iOS and
                Android apps using{' '}
                <a href="https://capacitorjs.com/" target="_blank">
                  Capacitor
                </a>
                .
              </p>
            </div>
            <div className="col-6">
              <div className="youtube-responsive-container">
                <iframe
                  title="Create Your Own BCH or eCash Web Wallet"
                  src="https://www.youtube.com/embed/G7ptg7VIRnk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section id="two" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Gatsby Starters, Themes, and Plugins</h2>
              </header>
              <p>
                Armed with a firm understanding of Gatsby{' '}
                <a
                  href="https://www.gatsbyjs.com/docs/starters/"
                  target="_blank"
                >
                  Starters
                </a>
                ,{' '}
                <a href="https://www.gatsbyjs.com/docs/themes/" target="_blank">
                  Themes
                </a>
                , and{' '}
                <a
                  href="https://www.gatsbyjs.com/docs/plugins/"
                  target="_blank"
                >
                  Plugins
                </a>
                , you'll be ready to leverage the code repositories below. For
                building Plugins, you'll also need to have a firm grasp of{' '}
                <a
                  href="https://www.gatsbyjs.com/blog/2019-04-29-component-shadowing/"
                  target="_blank"
                >
                  Component Shadowing
                </a>{' '}
                and{' '}
                <a
                  href="https://www.gatsbyjs.com/blog/2019-07-02-extending-components/"
                  target="_blank"
                >
                  Extending shadowed components
                </a>
                .
              </p>
            </div>

            <div className="col-4">
              <h3>
                <b>bch-wallet-starter</b>
              </h3>
              <p>
                A Gatsby Starter for quickly customizing your own web wallet
                app.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://demo-wallet.fullstack.cash/"
                    className="button"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/bch-wallet-starter"
                    className="button"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3>
                <b>gatsby-ipfs-web-wallet</b>
              </h3>
              <p>
                The heart of the web wallet. All other parts are built around
                this Gatsby Theme.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://demo-wallet.fullstack.cash/"
                    className="button"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-web-wallet"
                    className="button"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3>
                <b>TX Plugin</b>
              </h3>
              <p>
                This TX history plugin is the simplest template to follow for
                your own plugins.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/gatsby-plugin-bch-tx-history"
                    className="button"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="three" className="main style3 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Example Web Apps</h2>
              </header>
              <p>
                These are just a few of the web apps that have been built with
                the tools above.
              </p>
            </div>

            <div className="col-4">
              <h3>
                <b>wallet.FullStack.cash</b>
              </h3>
              <p>
                Our official wallet includes the ability to sweep coins and
                tokens from a{' '}
                <a
                  href="https://slp-paper-wallet.fullstack.cash/"
                  target="_blank"
                >
                  paper wallet
                </a>
                , utilizing{' '}
                <a
                  href="https://github.com/Permissionless-Software-Foundation/gatsby-plugin-bch-sweep"
                  target="_blank"
                >
                  this plugin
                </a>
                .
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://wallet.fullstack.cash/"
                    className="button"
                    target="_blank"
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3>
                <b>message.FullStack.cash</b>
              </h3>
              <p>
                A communication tool for the PSF community. Send encrypted
                email, upload files to IPFS, and read the community feed.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://message.fullstack.cash/"
                    className="button"
                    target="_blank"
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3>
                <b>chat.FullStack.cash</b>
              </h3>
              <p>
                End-to-end encrypted instant messaging, and developer platform
                for working with the JSON RPC over IPFS.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="chat.fullstack.cash"
                    className="button"
                    target="_blank"
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h3>
                <b>GeoDrop.cash</b>
              </h3>
              <p>
                A map-based scavenger hunt game, similar to Pokemon Go. This app
                won first place at the{' '}
                <a
                  href="https://devpost.com/software/purelypeer"
                  target="_blank"
                >
                  2020 Coinparty Hackathon
                </a>
                .
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://geodrop.cash/"
                    className="button"
                    target="_blank"
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h3>
                <b>TorList.cash</b>
              </h3>
              <p>
                Under heavy development. This app will use a{' '}
                <a
                  href="https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service"
                  target="_blank"
                >
                  censorship resistant, p2p database
                </a>{' '}
                to curate lists of deep-web websites.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://torlist.cash/"
                    className="button"
                    target="_blank"
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <h3>
                <b>UncensorablePublishing.com</b>
              </h3>
              <p>
                Not a web wallet, but the source of the censorship resistant
                publishing technology that allows web apps to be served
                simultaniously over the clear web, Tor, and IPFS.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://uncensorablepublishing.com/"
                    className="button"
                    target="_blank"
                  >
                    Check It Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Plugins</h2>
              </header>
              <p>
                These are the top plugins developed by the PSF community, which
                you can use to enhance your own web wallet app.
              </p>
            </div>

            <div className="col-4">
              <h3>
                <b>gatsby-plugin-bch-sweep</b>
              </h3>
              <p>
                Unlocks the ability to 'sweep'{' '}
                <a href="https://paperwallet.bitcoin.com/" target="_blank">
                  coin paper wallets
                </a>{' '}
                and{' '}
                <a
                  href="https://slp-paper-wallet.fullstack.cash/"
                  target="_blank"
                >
                  token paper wallets
                </a>
                . A conveniant 'cold storage' option, and a great way to share
                assets with the crypto-currious.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/gatsby-plugin-bch-sweep"
                    className="button"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3>
                <b>gatsby-plugin-bch-sign</b>
              </h3>
              <p>
                Cryptographically sign a message. The output of this plugin can
                be used to prove ownership of an address. Useful for proving
                ownership of a token.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/gatsby-plugin-bch-sign"
                    className="button"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h3>
                <b>bch-wallet-plugin-postoffice</b>
              </h3>
              <p>
                The front-end component for communitcating with the{' '}
                <a
                  href="https://github.com/Permissionless-Software-Foundation/postoffice.fullstack.cash"
                  target="_blank"
                >
                  Post Office back end
                </a>
                . Allows a native token experience, by removing BCH transaction
                fees.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/bch-wallet-plugin-postoffice"
                    className="button"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="five" className="main style3 special">
          <div className="container">
            <header className="major">
              <h2>Ready to get started?</h2>
            </header>
            <ul className="actions uniform">
              <li>
                <a href="/profile" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/examples" className="button">
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

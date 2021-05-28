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
    const siteTitle = 'Front End Dev | FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Front End: Web & Phone Apps</h2>
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

        <section id="three" className="main style2 special">
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
                <b>Wallet Plugins</b>
              </h3>
              <p>
                "Anything that can be a plugin, should be a plugin." Boilerplate
                code and video.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://youtu.be/NGnuwLJWqZ4"
                    className="button"
                    target="_blank"
                  >
                    Video
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/bch-wallet-plugin-boilerplate"
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

        <section id="four" className="main style3 special">
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

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
  render() {
    const siteTitle = 'JS Libraries | FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Libraries: Supercharge Your Application</h2>
              </header>
              <p>
                JavaScript{' '}
                <a href="https://npmjs.com" target="_blank">
                  npm libraries
                </a>{' '}
                act as middleware 'glue' to tie the front end application to the
                back end infrastructure. They also allow developers to
                supercharge their applications with new featuers, and then share
                those features with other devlepers and applications.
              </p>
              <p>
                <a
                  href="https://github.com/Permissionless-Software-Foundation/bch-js"
                  target="_blank"
                >
                  bch-js
                </a>{' '}
                is the primary JavaScript library for interacting with a
                blockchain, but FullStack.cash maintains several additional
                libraries for specific blockchain use cases. This page lists the
                most popular and important libraries we maintain.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={libraries} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="three" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-6">
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
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/bch-js"
                    className="button"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <h3>
                <b>slp-cli-wallet</b>
              </h3>
              <p>
                This command-line wallet is a handy tool for rapidly prototyping
                ideas. Because there is no graphical user interface, the burden
                for trying new ideas is greatly reduced.
              </p>
              <p>
                This is a HD wallet with full support for SLP and NFT tokens.
                It's also an npm library that can be easily added to your own
                applications to infuse them with same wallet capabilities.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/slp-cli-wallet"
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

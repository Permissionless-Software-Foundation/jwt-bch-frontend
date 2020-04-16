import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import bchApiStack from '../assets/images/bch-api-stack2.jpg'

import '../assets/css/main2.css'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'BCH Blockchain As-A-Service SaaS'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  <div>FullStack.Cash</div>

                  <div>BCH Blockchain As-A-Service</div>
                </h2>
              </header>
              <h3>
                The open source 'Cash Stack' allows phone and web apps to
                interact with the Bitcoin Cash blockchain.
              </h3>
              <ul className="actions uniform">
                <li>
                  <a href="/login" className="button special">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="button">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="youtube-responsive-container">
                <iframe
                  title="Bitcoin Cash Full Stack Introduction"
                  src="https://www.youtube.com/embed/ZwK0SHVxhE0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div><center>
              <ul className="actions uniform" style={{padding: '15px'}}>
                <li>
                  <a href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer"
                  className="button special" target="_blank">
                    Read the Article
                  </a>
                </li>
              </ul>
              </center></div>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>What is the 'Cash Stack'?</h2>
              </header>
              <h4>
                It's the full stack of software allowing modern apps to talk to
                the blockchain, <b>and use permissionless money.</b>
              </h4>
              <p>
                For full-stack developers who want to run their own
                infrastructure,{' '}
                <a
                  href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer"
                  target="_blank"
                >
                  this articles shows you how
                </a>
                . But most front-end developers will want someone else to take
                care of the back-end duties.{' '}
                <b>That's what FullStack.cash does.</b>
              </p>
              <p>
                Are you a developer? <a href="/login">Create an account</a> in
                order to unlock increased rate-limits when using the{' '}
                <a
                  href="https://www.npmjs.com/package/@chris.troutner/bch-js"
                  target="_blank"
                >
                  bch-js npm library
                </a>{' '}
                to call the{' '}
                <a href="https://api.fullstack.cash">
                  bch-api REST API at api.fullstack.cash
                </a>
                .
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <a
                  href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer"
                  target="_blank"
                >
                  <img src={bchApiStack} alt="" />
                </a>
              </span>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-4">
              <span className="icon major fas fa-bolt"></span>
              <h3>Examples</h3>
              <p>
                Get started quickly with code examples that cover most common
                use-cases.
              </p>
              <ul className="actions">
                <li>
                  <a href="/examples" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="icon major fas fa-book"></span>
              <h3>Documentation</h3>
              <p>
                Read the API documentation for bch-api, bch-js, and others parts
                of the stack.
              </p>
              <ul className="actions">
                <li>
                  <a href="/documentation" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="icon major fas fa-users"></span>
              <h3>Community</h3>
              <p>
                FullStack.cash is an extension of the{' '}
                <a href="https://psfoundation.cash" target="_blank">
                  Permissionless Software Foundation
                </a>{' '}
                community.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://t.me/permissionless_software"
                    className="button"
                  >
                    More
                  </a>
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

export default Homepage

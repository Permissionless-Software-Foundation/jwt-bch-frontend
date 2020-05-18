import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import masteringBitcoinCash from '../assets/images/mastering-bitcoin-cash.jpg'
import slp from '../assets/images/slp-transparent.png'
import tutorialCash from '../assets/images/tutorialcash.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Documentation'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  The Best Technical Reference:
                </h2>
              </header>
              <p>
                Adapted from Mastering Bitcoin
                by <a href="https://twitter.com/aantonop" target="_blank">Andreas Antonopoulos</a>,
                {' '}<a href="https://developer.bitcoin.com/mastering-bitcoin-cash/" target="_blank">Mastering Bitcoin Cash</a> is
                the most approachable technical reference
                to working with the Bitcoin Cash protocol.
              </p>
              <center><ul className="actions">
                <li>
                  <a href="https://developer.bitcoin.com/mastering-bitcoin-cash/" target="_blank" className="button">
                    More
                  </a>
                </li>
              </ul></center>
            </div>

            <div className="col-6">
              <span className="image fit">
                <a href="https://developer.bitcoin.com/mastering-bitcoin-cash/" target="_blank">
                  <img src={masteringBitcoinCash} alt="" />
                </a>
              </span>
            </div>
          </div>
        </section>

        <section id="three" className="main style2 special">
          <div className="grid-wrapper">

            <div className="col-4">
              <span className="image fit">
                <span className="icon style1 major fas fa-code"></span>
              </span>
              <h3>bch-js</h3>
              <p>
                This <a href="https://www.npmjs.com/package/@chris.troutner/bch-js" target="_blank">npm JavaScript library </a> can
                be added to your node.js project
                to instantly allow your app to talk to Bitcoin Cash Blockchain.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://bchjs.cash/bch-js/index.html" target="_blank" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <span className="image fit">
                <span className="icon style2 major fas fa-bolt"></span>
              </span>
              <h3>bch-api</h3>
              <p>
                The REST API that bch-js communicates with. This is the software
                being operated by FullStack.cash. Every major programming language
                can communicate with a REST API.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://api.fullstack.cash/docs" target="_blank" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <span className="image fit">
                <span className="icon style4 major fas fa-cog"></span>
              </span>
              <h3>The 'Cash Stack'</h3>
              <p>
                Learn about the 'full stack' of software required for a modern
                phone app or website to communicate directly with the blockchain.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer" target="_blank" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">

            <div className="col-12">
              <h2>Community Resources</h2>
            </div>

            <div className="col-6">
              <span className="image fit">
                <a href="https://tutorial.cash" target="_blank">
                  <img src={tutorialCash} alt="" />
                </a>
              </span>
              <h3>Tutorial.cash</h3>
              <p>
                Tutorial.cash is a website that currates tutorials from around
                the Bitcoin Cash Community. Many are non-technical, which makes
                for a great introduction to the space.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://tutorial.cash" target="_blank" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <span className="image fit">
                <a href="https://slp.dev" target="_blank">
                  <img src={slp} alt="" />
                </a>
              </span>
              <h3>slp.dev</h3>
              <p>
                The cononical reference for everything to do with SLP (Simple
                Ledger Protocol) tokens and all the tools available for developers
                who want to work with them.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://slp.dev" target="_blank" className="button">
                    More
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

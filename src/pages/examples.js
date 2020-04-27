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
  render() {
    const siteTitle = 'Examples - Get Started Quickly'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">

                <center><h2 style={{padding: '25px'}}>
                  Get Started Quick
                </h2></center>

              <p>
                These bite-sized example applications show you how to create a
                wallet, send BCH, create SLP tokens, read and write text to
                the blockchain, and more. Each example acts
                like a lego block, showing you how to build your way towards
                common business solutions.
              </p>
            </div>
            <div className="col-6">
            <center>
              <h2><span className="icon style1 major fas fa-code"></span></h2>
              <ul className="actions uniform">
                <li>
                  <a href="https://github.com/Permissionless-Software-Foundation/bch-js-examples"
                  target="_blank" className="button">
                    View Examples on GitHub
                  </a>
                </li>
              </ul>
              </center>
            </div>
          </div>
        </section>

        <section id="three" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Want More? Check this out.</h2>
              </header>
              <p>
                The examples above are great to start with, but they are a long way
                from turn-key business solutions. These more advanced examples
                allow you to quickly integrate Bitcoin Cash and SLP tokens into
                your application.
              </p>
            </div>

            <div className="col-6" style={{marginTop: '75px'}}>
              <span className="image fit">
                <span className="icon style6 major fas fa-faucet"></span>
              </span>
              <h3>Testnet Faucet</h3>
              <p>
                Try out the examples above with free testnet coins, available from
                this faucet. Most developers will prefer to work direclty on mainnet,
                but when starting out, it's sometimes easier to start by working
                on the testnet.
              </p>
              <ul className="actions">
                <li>
                  <a href="/faucet" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6" style={{marginTop: '75px'}}>
              <span className="image fit">
                <span className="icon style1 major fas fa-binoculars"></span>
              </span>
              <h3>Explorer UI</h3>
              <p>
                Visually interact with the FullStack.cash REST API. Great for
                debugging and exploring the potential of apps interacting
                directly with the blockchain. Each endpoint is covered in more
                detail by
                the <a href="/documentation">bch-api documentation</a>.
              </p>
              <ul className="actions">
                <li>
                  <a href="/explore-mainnet" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>


            <div className="col-6" style={{marginTop: '75px'}}>
              <span className="image fit">
                <span className="icon style2 major fas fa-cog"></span>
              </span>
              <h3>Automatic JWT Handling</h3>
              <p>
                This demo app shows how to integrate automatic JWT token
                handling into your application. All you need to worry about is
                topping up your FullStack.cash account with BCH. This app will
                automatically validate, retrieve, and renew the JWT access token
                for the our API.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://github.com/Permissionless-Software-Foundation/jwt-bch-demo"
                  target="_blank" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6" style={{marginTop: '75px'}}>
              <span className="image fit">
                <span className="icon style3 major fas fa-wallet"></span>
              </span>
              <h3>SLP Wallet Library</h3>
              <p>
                This npm library can be added to your project to instantly give
                it the ability to work with BCH and SLP tokens. It doubles as
                a command line interface (CLI) wallet app. It's an HD wallet
                with an emphasis on privacy best-practices.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://github.com/christroutner/slp-cli-wallet"
                  target="_blank" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>


          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <ul className="actions uniform">
              <li>
                <a href="/profile" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/documentation" className="button">
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

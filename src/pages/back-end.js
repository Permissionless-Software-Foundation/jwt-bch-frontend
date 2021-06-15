import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import backend from '../assets/images/back-end.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Back-End Dev | FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Back-End: Docker Containers
                  <br /> and DevOps
                </h2>
              </header>
              <p>
                The 'Back-End' of the Cash Stack is concerned with the REST API
                layer and all the layers below it. This software has been
                conveniently packaged in Docker containers that can mount
                pre-synced databases. The pre-synced databases can be downloaded
                over IPFS from from the <a href="/cashstrap">Cash Strap page</a>
                .
              </p>
              <center>
                <a href="/cashstrap" className="button">
                  CashStrap
                </a>
              </center>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={backend} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="three" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>back-end Software</h2>
              </header>
              <p>
                The software repositories below are used to create Docker
                containers for running the back-end infrastructure of the Cash
                Stack. They can be used to mount the pre-synced databases,
                downloadable from IPFS via the{' '}
                <a href="/cashstrap">Cash Strap page</a>.
              </p>
              <p>
                The software below is complex. We try to simplify it by using
                Docker containers, but the learning curve can be rough.{' '}
                <a href="/pricing">
                  FullStack.cash offers access to hosted infrastructure
                </a>
                , but FullStack.cash is not a 'walled garden'. We offer the
                software below for anyone who wants to run their own
                infrastructure.
              </p>
            </div>

            <div className="col-6">
              <h3>
                <b>bch-api REST API</b>
              </h3>
              <p>
                A REST API based on node.js and the Express.js framework. It
                abstracts the full node and indexer layers into a single common
                REST interface.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/bch-api"
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
                <b>Full Nodes</b>
              </h3>
              <p>
                Full nodes are the most basic piece of infrastructure for
                interacting with a blockchain. We maintain Docker containers for{' '}
                <a
                  href="https://github.com/Permissionless-Software-Foundation/docker-bchn"
                  target="_blank"
                >
                  BCHN
                </a>
                ,{' '}
                <a
                  href="https://github.com/Permissionless-Software-Foundation/docker-bchd"
                  target="_blank"
                >
                  BCHD
                </a>
                ,{' '}
                <a
                  href="https://github.com/Permissionless-Software-Foundation/docker-abc"
                  target="_blank"
                >
                  ABC
                </a>{' '}
                full nodes.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-bchn"
                    className="button"
                    target="_blank"
                  >
                    BCHN Full Node
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <h3>
                <b>Fulcrum</b>
              </h3>
              <p>
                Fulcrum is the most performant indexer available for BTC, BCH,
                and eCash (BCHA) blockchains. It implements the Electrumx
                protocol used by the Electrum series of wallet software. This
                indexer provides UTXO, address balance, and transaction history
                needed by any wallet app.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-fulcrum"
                    className="button"
                    target="_blank"
                  >
                    Docker Container
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <h3>
                <b>SLPDB</b>
              </h3>
              <p>
                SLPDB populates a Mongo database with blockchain data about SLP
                tokens. Expressive queries can be executed against this database
                to get all kinds of statistics about SLP and NFT tokens.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-slpdb"
                    className="button"
                    target="_blank"
                  >
                    Docker Container
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style3 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Software As A Service</h2>
              </header>
              <p>
                Just as FullStack.cash offers blockchain infrastructure access
                as-a-service,{' '}
                <a href="https://psfoundation.cash" target="_blank">
                  the PSF
                </a>{' '}
                also offers back-end code to help other developers sell back-end
                software-as-a-service (SaaS). These reposities will be of
                interest to entreprenurial-minded developers that want to earn
                cryptocurrency by selling software services.
              </p>
            </div>

            <div className="col-6">
              <h3>
                <b>Earn Cryptocurrency from an API</b>
              </h3>
              <p>
                This video is a bit old, but it still explains how
                entreprenurialy minded developers can earn cryptocurrency by
                running infrastructure services like FullStack.cash.
              </p>
              <div className="youtube-responsive-container">
                <iframe
                  title="Create Your Own BCH or eCash Web Wallet"
                  src="https://www.youtube.com/embed/oFa8Q2OCSaw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <br />
              <br />
            </div>

            <div className="col-6">
              <h3>
                <b>ipfs-service-provider</b>
              </h3>
              <p>
                This is a boilerplate repository of code for creating new SaaS
                applications. It's intended to be forked and customized for your
                own use. It includes all the core infrastructure needed to build
                the back-end of a SaaS app, using the the following interfaces:
              </p>
              <ul>
                <li>REST API over HTTP</li>
                <li>
                  JSON RCP over{' '}
                  <a href="https://ipfs.io" target="_blank">
                    IPFS
                  </a>
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/ipfs-service-provider"
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
                <b>docker-gatsby-web-server</b>
              </h3>
              <p>
                This back-end web server simultaniously serves website or web
                app content to the clear web, Tor, and IPFS. The web app can be
                accessed over any combination of the three options. This
                provides a number of options for privacy, performance, and
                censorship resistance for web app builders.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-gatsby-webserver"
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
                <b>ipfs-p2wdb-service</b>
              </h3>
              <p>
                Based on ipfs-service-provider, this SaaS app sells access to a
                decentralized database, which possesses qualities similar to a
                blockchain. Data in this database is accessible to any
                application on the BCH, eCash, or Avalanche blockchains, as well
                as the IPFS network. It's a highly accessible, cross-chain
                database with high censorship resistance.
              </p>
              <p>
                Warning: This software is open for Alpha testing, and not ready
                for production.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service"
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

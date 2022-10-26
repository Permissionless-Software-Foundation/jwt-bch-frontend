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
  render () {
    const siteTitle = 'Back-End Dev | FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id='one' className='main style1'>
          <div className='grid-wrapper'>
            <div className='col-6'>
              <header className='major'>
                <h2>
                  Back End: Docker Containers
                  <br /> and DevOps
                </h2>
              </header>
              <p>
                The 'back end' of the Cash Stack is concerned with the REST API
                layer and all the layers below it. This software has been
                conveniently packaged in Docker containers that can mount
                pre-synced databases. The pre-synced databases can be downloaded
                over IPFS from from the <a href='/cashstrap'>Cash Strap page</a>
                .
              </p>
              <center>
                <a href='/cashstrap' className='button'>
                  CashStrap
                </a>
              </center>
            </div>
            <div className='col-6'>
              <span className='image fit'>
                <img src={backend} alt='' />
              </span>
            </div>
          </div>
        </section>

        <section id='three' className='main style2 special'>
          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h2>Back-End Software</h2>
              </header>
              <p>
                The software repositories below are used to create Docker
                containers for running the back-end infrastructure of the Cash
                Stack. They can be used to mount the pre-synced databases,
                downloadable from IPFS via the{' '}
                <a href='/cashstrap'>Cash Strap page</a>.
              </p>
              <p>
                The software below is complex. We try to simplify it by using
                Docker containers, but the learning curve can be rough.{' '}
                <a href='/pricing'>
                  FullStack.cash offers access to hosted infrastructure
                </a>
                , but FullStack.cash is not a 'walled garden'. We offer the
                software below for anyone who wants to run their own
                infrastructure.
              </p>
            </div>

            <div className='col-6'>
              <h3>
                <b>bch-api REST API</b>
              </h3>
              <p>
                A REST API based on node.js and the Express.js framework. It
                abstracts the full node and indexer layers into a single common
                REST interface.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/bch-api'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Code
                  </a>
                </li>
                <li>
                  <a
                    href='https://api.fullstack.cash/docs/'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <h3>
                <b>Full Nodes</b>
              </h3>
              <p>
                Full nodes are the most basic piece of infrastructure for
                interacting with a blockchain. We maintain Docker containers for{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation/docker-bchn'
                  target='_blank' rel='noreferrer'
                >
                  BCHN
                </a>
                {' '}and{' '}
                <a
                  href='https://github.com/Permissionless-Software-Foundation/docker-abc'
                  target='_blank' rel='noreferrer'
                >
                  eCash
                </a>{' '}
                full nodes.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/docker-bchn'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    BCHN Full Node
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>Fulcrum</b>
              </h3>
              <p>
                Fulcrum is the most performant indexer available for BTC, BCH,
                and eCash (XEC) blockchains. It implements the Electrumx
                protocol used by the Electrum series of wallet software. This
                indexer provides UTXO, address balance, and transaction history
                needed by any wallet app.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/docker-fulcrum'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Docker Container
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>SLP Indexer</b>
              </h3>
              <p>
                The psf-slp-indexer crawls the blockchain and tracks all SLP
                tokens and NFTs on the blockchain. This indexer is required for any
                application that needs to interact with tokens.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/psf-slp-indexer'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Docker Container
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>Pay-to-Write Database</b>
              </h3>
              <p>
                The pay-to-write database (P2WDB) is a censorship resistent database.
                It's similar to a blockchain, but better optimized for data. Each
                write can contain up to 10 KB of data. It serves an important role
                when building cryptocurrency apps, since blockchains are not
                optimized for storing data.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://p2wdb.com'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Find Out More
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6'>
              <h3>
                <b>IPFS Service Provider</b>
              </h3>
              <p>
                This Docker container communicates with bch-api in order to proxy
                the API calls over the IPFS network. This is a core piece of
                software that enables the 'web3' version of the Cash Stack.
              </p>
              <ul className='actions'>
                <li>
                  <a
                    href='https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service'
                    className='button'
                    target='_blank' rel='noreferrer'
                  >
                    Docker Container
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

import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import bitcoinAbc from '../assets/images/bitcoinabc-368x240.jpg'
import trezor from '../assets/images/trezor-368x240.jpg'
import slp from '../assets/images/slp-368x240.jpg'
import fulcrum from '../assets/images/fulcrum.png'
import bchn from '../assets/images/bchn.png'
import psf from '../assets/images/psf-logo.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Cashstrap - Build Your Own Full Stack'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h1>Cashstrap - Bootstrap the Cash Stack</h1>
              </header>
              <p>
                If you prefer the sovereignty of running your own
                infrastructure, and you're willing to accept the cost of
                managing your own{' '}
                <a
                  href="https://psfoundation.cash/blog/cash-stack"
                  target="_blank"
                >
                  full stack of software
                </a>
                , then the files below will help you bootstrap it.
              </p>
              <p>
                You do not need to download all the files. The files below are
                split between <i>BCH</i> and <i>eCash</i>. Because the files are
                so large, they are shared via the{' '}
                <a href="https://ipfs.io" target="_blank">
                  IPFS
                </a>{' '}
                file-sharing protocol. They are not available for direct
                download.
              </p>
              <p>
                Please help the Bitcoin Cash developer community by{' '}
                <a
                  href="https://docs.ipfs.io/concepts/persistence/#persistence-versus-permanence"
                  target="_blank"
                >
                  pinning
                </a>{' '}
                the files below!
              </p>
              <p>
                If your IPFS node has trouble finding the files, you can connect
                directly to our file servers with these commands:
                <br />
                <code>
                  ipfs swarm connect
                  /ip4/5.161.42.62/tcp/4001/p2p/12D3KooWPRRyk3rh7dHTY4tQsRM3UEUK7uo5ZAqqxwTT3iSBTu6K/p2p-circuit/p2p/12D3KooWAcUCtTPJ87obGinW4jxWqmR1EbxADji6wfmRzYTyfqwm
                </code>
                <br />
                <code>
                  ipfs swarm connect
                  /ip4/5.161.42.62/tcp/4001/p2p/12D3KooWPRRyk3rh7dHTY4tQsRM3UEUK7uo5ZAqqxwTT3iSBTu6K/p2p-circuit/p2p/12D3KooWNYcNyB1ACYiDfGG6QZYrq72GQJA1WMpUeCSY5z14vcDV
                </code>
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h1>BCH</h1>
              </header>
              <p>
                Below are links to Docker containers and pre-synced databases
                for the Bitcoin Cash (BCH) blockchain.
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{ border: 'solid 1px black' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={bchn} alt="" />
                <h3>Full Node Blockchain</h3>
              </span>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>BCH</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> bchn-12-19-2021-719113.zip
                </li>
                <li>
                  <b>File size:</b> 161GB
                </li>
                <li>
                  <b>IPFS Hash:</b>{' '}
                  QmXKdvTxMboAGanMsYhzjiM8rj9cviLNJ9sqnG5CPLEmfN
                </li>
              </ul>

              <p>
                <b>
                  Use the files with{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-bchn"
                    target="_blank"
                  >
                    this Docker container
                  </a>
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <center>
                  <img src={fulcrum} alt="fulcrum" style={{ width: '50%' }} />
                </center>
                <h3>Fulcrum ElectrumX Indexer</h3>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>
              <h3>BCH</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> fulcrum-v1.2.3-bchn-12-19-21.zip
                </li>
                <li>
                  <b>File size:</b> 31GB
                </li>
                <li>
                  <b>IPFS Hash:</b>{' '}
                  QmZkqQGqWfzvX6qPHDzrtoALkUU9N8PTqH8PaL8ZVogvMq
                </li>
              </ul>

              <p>
                <b>
                  Use the files with{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-fulcrum"
                    target="_blank"
                  >
                    this Docker container
                  </a>
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={psf} alt="" />
                <h3>PSF SLP Token Indexer</h3>
              </span>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>BCH</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b>
                  <br />
                  slp-indexer-722000.zip
                </li>
                <li>
                  <b>File size:</b> 2.6GB
                </li>
                <li>
                  <b>IPFS Hash:</b>{' '}
                  QmaL3V47UiZqb3yjxB4kwPavwieFY8ZLs4E3w1ACswUfnQ
                </li>
              </ul>

              <p>
                <b>
                  Use the files with{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/psf-slp-indexer"
                    target="_blank"
                  >
                    this Docker container
                  </a>
                </b>
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h1>eCash</h1>
              </header>
              <p>
                Below are links to Docker containers and pre-synced databases
                for the eCash (BCHA) blockchain developed by{' '}
                <a href="https://www.bitcoinabc.org/" target="_blank">
                  Bitcoin ABC
                </a>
                .
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{ border: 'solid 1px black' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={bitcoinAbc} alt="" />
                <h3>Full Node Blockchain</h3>
              </span>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>eCash</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> ecash-mainnet-11-09-21.zip
                </li>
                <li>
                  <b>File size:</b> 139GB
                </li>
                <li>
                  <b>IPFS Hash:</b>{' '}
                  Qmb72EehbMJJhWDSsFE7uswu7M41YL3ttfQtyWtqKKXXig
                </li>
              </ul>

              <p>
                <b>
                  Use the files with{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-abc"
                    target="_blank"
                  >
                    this Docker container
                  </a>
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <center>
                  <img src={fulcrum} alt="fulcrum" style={{ width: '50%' }} />
                </center>
                <h3>Fulcrum ElectrumX Indexer</h3>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>
              <h3>eCash</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> fulcrum-abc-11-09-21.zip
                </li>
                <li>
                  <b>File size:</b> 27GB
                </li>
                <li>
                  <b>IPFS Hash:</b>{' '}
                  Qmc2uEiPGbQLAdY9V41gG5i75TARLRVwcB5wHe2Lyack7B
                </li>
              </ul>

              <p>
                <b>
                  Use the files with{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-fulcrum"
                    target="_blank"
                  >
                    this Docker container
                  </a>
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={slp} alt="" />
                <h3>SLP Token Indexer</h3>
              </span>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>eCash</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b>
                  <br />
                  slpdb-ecash-11-09-21-9a85b1bd381a82e6d2094d6936774ee5a4503de3.zip
                </li>
                <li>
                  <b>File size:</b> 3GB
                </li>
                <li>
                  <b>IPFS Hash:</b>{' '}
                  QmYEJS9ngiceLuTH4EWXKx19wgwSkapU5kYwNA3wgVP7pK
                </li>
              </ul>

              <p>
                <b>
                  Use the files with{' '}
                  <a
                    href="https://github.com/Permissionless-Software-Foundation/docker-slpdb"
                    target="_blank"
                  >
                    this Docker container
                  </a>
                </b>
              </p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Want us to do the heavy lifting?</h2>
            </header>
            <p>
              FullStack.cash runs the above software so that you don't have to.
            </p>
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
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Homepage

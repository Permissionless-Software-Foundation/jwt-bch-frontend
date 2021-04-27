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
                split between <i>BCH</i>, <i>eCash</i>, and <i>testnet3</i>.
                Because the files are so large, they are shared via the{' '}
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
                  <b>Filename:</b> bchn-mainnet-04-15-21-683465-v23.0.0.zip
                </li>
                <li>
                  <b>File size:</b> 148GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmdkahGkktLHEWzsfXG84cRAAa3rFR6tae2RxZVoPdKCwC
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
                  <b>Filename:</b> fulcrum-v1.2.3-bch-683578-04-15-21.zip
                </li>
                <li>
                  <b>File size:</b> 30GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmdwU1b8bKsZL2fG7gU9piWoTrSxY8urPxXr3W2vnf2skP
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
              <h3>BCH</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b>
                  <br />
                  slpdb-bchn-main-2021-03-24-680164-f1f48a3b7a852e24fd26b3baf6df65b47de6d89e.zip
                </li>
                <li>
                  <b>File size:</b> 4GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmbeJxmYiLF3YZiV7jMfSt8oxAxiAq93vkXau5Q8ezRBi4
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
                  <b>Filename:</b> abc-mainnet-04-18-21-682645-0.23.1.zip
                </li>
                <li>
                  <b>File size:</b> 139GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmUZ2juKHnYqXkxZe6ipnKfwZJhfLsG1ZVjKb2gjtWiXrX
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
                  <b>Filename:</b>{' '}
                  fulcrum-abc-mainnet-04-18-21-682669-v1.2.3.zip
                </li>
                <li>
                  <b>File size:</b> 27GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmeVMBg2nwhZt5Rt3QonupH5pBem1K7guLqUVzSW2PmBAR
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
                  slpdb-abc-v1-f1f48a3b7a852e24fd26b3baf6df65b47de6d89e-01-19-21-669672.zip
                </li>
                <li>
                  <b>File size:</b> 2.8GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmVsjNK7sTEGHmUyZKYseH4VyEv82sn3iuUxPqpTzSE1Qr
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

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h1>Testnet3</h1>
              </header>
              <p>
                We also provide infrastructure for testnet3, based on the BCHN
                full node.
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
              <h3>Testnet3</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> bchn-testnet3-04-12-2021-1442953.zip
                </li>
                <li>
                  <b>File size:</b> 23GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmV6CZYjiKiXNFKpnyMJx65dDxkfVsxhH75gbNLK5UaFSG
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
              <h3>Testnet3</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> fulcrum-bchn-testnet3-04-12-21-1442953.zip
                </li>
                <li>
                  <b>File size:</b> 4.6GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmUmigPuXo3sbvzx4nXLURWt14qm27PMHhnxWY1frKkL2R
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
              <h3>Testnet3</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b>
                  <br />
                  slpdb-testnet-bchn-01-20-21-f1f48a3b7a852e24fd26b3baf6df65b47de6d89e-1431114.zip
                </li>
                <li>
                  <b>File size:</b> 0.02GB
                </li>
                <li>
                  <b>IPFS Hash:</b> QmaZozQdbZ483r7cDEbRoeAtpBEemKLHMjgKvYYAT19tZB
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

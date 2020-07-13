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
                If you prefer the sovereignty of running your own infrastructure,
                and you're willing to accept the cost of managing your own{' '}
                <a
                  href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer"
                  target="_blank"
                >
                  full stack of software
                </a>
                , then the files below will help you bootstrap it.
              </p>
              <p>
                You do not need to download all the files unless you want to run
                the full stack of software for both <i>mainnet</i> and{' '}
                <i>testnet</i>. Because the files are so large, they are shared via
                the <a href="https://www.qbittorrent.org/" target="_blank">BitTorrent</a> file-sharing
                protocol. They are not available for direct download.
              </p>
              <p>
                Please help the Bitcoin Cash developer community by seeding the
                files below!
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{ border: 'solid 1px black' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={bitcoinAbc} alt="" />
                <h3>Full Node Blockchain</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-abc"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> abc-mainnet-627883-v0.21.2-03-24-2020.zip
                </li>
                <li>
                  <b>File size:</b> 134GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:dcb738b13d997af066f90f82e77a9faa94616d2d&dn=abc-mainnet-627883-v0.21.2-03-24-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> abc-testnet-1368227-v0.21.2-03-24-2020.zip
                </li>
                <li>
                  <b>File size:</b> 23GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:a12f6c7a4c6ea04f47fcafd77209a3ce19f70dd6&dn=abc-testnet-1368227-v0.21.2-03-24-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <img src={trezor} alt="" />
                <h3>Blockbook Indexer</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-ubuntu-blockbook"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> blockbook-bch-mainnet-v0.3.2-03-23-2020.zip
                </li>
                <li>
                  <b>File size:</b> 108GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:a001bfe0884f518800a19f3e0ccaaba3d0c22652&dn=blockbook-bch-mainnet-v0.3.2-03-23-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> blockbook-bch-testnet-v0.3.2-03-23-2020.zip
                </li>
                <li>
                  <b>File size:</b> 18GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:1919a670acb2dc5ff158a42021e17ec107d8ddac&dn=blockbook-bch-testnet-v0.3.2-03-23-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="grid-wrapper"
            style={{ border: 'solid 1px black', marginTop: '25px' }}
          >
            <div className="col-6" style={{ padding: '20px' }}>
              <span className="image fit">
                <center><img src={fulcrum} alt="fulcrum" style={{width: '50%'}} /></center>
                <h3>Fulcrum ElectrumX Indexer</h3>
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-fulcrum"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>
              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> fulcrum-mainnet-04-12-2020.zip
                </li>
                <li>
                  <b>File size:</b> 27GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:0561e7fb66e09eadcc87485bb771ece3a44549fb&dn=fulcrum-mainnet-04-12-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b> fulcrum-testnet-04-12-2020.zip
                </li>
                <li>
                  <b>File size:</b> 4.8GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:0711604d1d4565dd3c1e6a6cb5477d78c66170ec&dn=fulcrum-testnet-04-12-2020.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>
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
                <p>
                  <b>
                    Use the files with{' '}
                    <a
                      href="https://github.com/christroutner/docker-slpdb"
                      target="_blank"
                    >
                      this Docker container
                    </a>
                  </b>
                </p>
              </span>
            </div>
            <div className="col-6" style={{ padding: '20px' }}>

              <h3>Mainnet</h3>
              <ul style={{ textAlign: 'left' }}>
                <li>
                  <b>Filename:</b>{' '}
                  slpdb-v1-mainnet-07-13-2020-643744-54714dfec7f82487d6d08dca19ae88918e7f8eef.zip
                </li>
                <li>
                  <b>File size:</b> 1.9GB
                </li>
                <li>
                  <a href="magnet:?xt=urn:btih:03c5d6c72ff44d9e48ac291ee702d5806f5a0166&dn=slpdb-v1-mainnet-07-13-2020-643744-54714dfec7f82487d6d08dca19ae88918e7f8eef.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                    Torrent magnet link
                  </a>
                </li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{ textAlign: 'left' }}>
              <li>
                <b>Filename:</b>{' '}
                slpdb-v1-testnet-07-13-2020-1394061-54714dfec7f82487d6d08dca19ae88918e7f8eef.zip
              </li>
              <li>
                <b>File size:</b> 0.02GB
              </li>
              <li>
                <a href="magnet:?xt=urn:btih:5154ab7a331aaf2d4bfb0bc3f00ede46f57b2d52&dn=slpdb-v1-testnet-07-13-2020-1394061-54714dfec7f82487d6d08dca19ae88918e7f8eef.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">
                  Torrent magnet link
                </a>
              </li>
              </ul>
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

import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import bitcoinAbc from '../assets/images/bitcoinabc-368x240.jpg'
import trezor from '../assets/images/trezor-368x240.jpg'
import slp from '../assets/images/slp-368x240.jpg'

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
                If you prefer the soverignty of running your own infrastructure,
                and you're willing to accept the cost of managing your
                own <a href="https://troutsblog.com/research/bitcoin-cash/how-to-bch-full-stack-developer" target="_blank">full stack of software</a>, then
                the files below will help you bootstrap it.
              </p>
              <p>
                You do not need to download all the files unless you want to run
                the full stack of software for both <i>mainnet</i> and <i>testnet</i>.
                Because the files are so large, they are shared via file-sharing
                protocols like BitTorrent and IPFS. They are not available for
                direct download.
              </p>
              <p>
                Please help the Bitcoin Cash developer community by seeding the
                files below!
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{border: 'solid 1px black'}}>
            <div className="col-6" style={{padding: '20px'}}>
              <span className="image fit">
                <img src={bitcoinAbc} alt="" />
                <h3>Full Node Blockchain</h3>
              </span>
            </div>
            <div className="col-6" style={{padding: '20px'}}>
              <p><b>
                Use the files below with <a href="https://github.com/christroutner/docker-abc" target="_blank">this Docker container</a>
              </b></p>

              <h3>Mainnet</h3>
              <ul style={{textAlign: 'left'}}>
                <li><b>Filename:</b> bch-abc-mainnet-0.20.10-01-25-2020-619429.zip</li>
                <li><b>File size:</b> 134GB</li>
                <li><a href="magnet:?xt=urn:btih:81f1ecb3a21718a1fc9e1d6aafc29c059764cef5&dn=bch-abc-mainnet-0.20.10-01-25-2020-619429.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">Torrent magnet link</a></li>
                <li>IPFS hash: QmdKwqb1xMasxyza8KuzRwUjShJoAfqL8AgiCemfYe71qC</li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{textAlign: 'left'}}>
                <li><b>Filename:</b> bch-abc-testnet-01-25-2020-1355757.zip</li>
                <li><b>File size:</b> 22GB</li>
                <li><a href="magnet:?xt=urn:btih:d0b6bd7d307c206cec8c7a97b88de767b4a546c3&dn=bch-abc-testnet-01-25-2020-1355757.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">Torrent magnet link</a></li>
                <li>IPFS hash: QmcyYdng94W1mpWn99RK2jSydz2DFApvW7UkN4Y5KMCdzs</li>
              </ul>
            </div>
          </div>

          <div className="grid-wrapper" style={{border: 'solid 1px black', marginTop: '25px'}}>
            <div className="col-6" style={{padding: '20px'}}>
              <span className="image fit">
                <img src={trezor} alt="" />
                <h3>Blockbook Indexer</h3>
              </span>
            </div>
            <div className="col-6" style={{padding: '20px'}}>
              <p><b>
                Use the files below with <a href="https://github.com/christroutner/docker-ubuntu-blockbook" target="_blank">this Docker container</a>
              </b></p>

              <h3>Mainnet</h3>
              <ul style={{textAlign: 'left'}}>
                <li><b>Filename:</b> blockbook-mainnet-01-21-20-618876.zip</li>
                <li><b>File size:</b> 111GB</li>
                <li><a href="magnet:?xt=urn:btih:554ea9fd2087bde3041cf54adcc37fcc881e8f5d&dn=blockbook-mainnet-01-21-20-618876.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">Torrent magnet link</a></li>
                <li>IPFS hash: QmTZ8i4qQwy2PpSxLdjMjJ712Uv3yZsAzDbgt86s3UWJUm</li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{textAlign: 'left'}}>
                <li><b>Filename:</b> blockbook-testnet-01-21-2020-1355060.zip</li>
                <li><b>File size:</b> 26GB</li>
                <li><a href="magnet:?xt=urn:btih:7d687d5e66e5ce1c2e31a9b1ffc376dc1ef34a42&dn=blockbook-testnet-01-21-2020-1355060.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">Torrent magnet link</a></li>
                <li>IPFS hash: QmX9AnTicGgVegudbf5rsZ3epRQDs1Gib3QbFnfvhjdcSY</li>
              </ul>
            </div>
          </div>

          <div className="grid-wrapper" style={{border: 'solid 1px black', marginTop: '25px'}}>
            <div className="col-6" style={{padding: '20px'}}>
              <span className="image fit">
                <img src={slp} alt="" />
                <h3>SLP Token Indexer</h3>
              </span>
            </div>
            <div className="col-6" style={{padding: '20px'}}>
              <p><b>
                Use the files below with <a href="https://github.com/christroutner/docker-slpdb" target="_blank">this Docker container</a>
              </b></p>

              <h3>Mainnet</h3>
              <ul style={{textAlign: 'left'}}>
                <li><b>Filename:</b> slpdb-mainnet-01-14-2020-929f59a5550cf269bc49a2c7853fd0bf59ec894a-617806.zip</li>
                <li><b>File size:</b> 1.1GB</li>
                <li><a href="magnet:?xt=urn:btih:f2bdbd40511a566998cb8fbbd9f828c3f997623e&dn=slpdb-mainnet-01-14-2020-929f59a5550cf269bc49a2c7853fd0bf59ec894a-617806.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com">Torrent magnet link</a></li>
                <li>IPFS hash: QmYEM9DMRyjktzYZ26Mj7knuAYpAeHYZjjPKbG51Br51zV</li>
              </ul>

              <h3>Testnet</h3>
              <ul style={{textAlign: 'left'}}>
                <li>Coming soon!</li>
              </ul>
            </div>
          </div>


        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Want us to do the heavy lifting?</h2>
            </header>
            <p>FullStack.cash runs the above software so that you don't have to.</p>
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
      </Layout>
    )
  }
}

export default Homepage

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
  render () {
    const siteTitle = 'Cashstrap - Build Your Own Full Stack'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <section id='three' className='main style1 special'>
          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h1>Cashstrap - Bootstrap the Cash Stack</h1>
              </header>
              <p>
                The CashStrap page is no longer maintained. Reach out
                to <a href='https://t.me/bch_js_toolkit' target='_blank' rel='noreferrer'>our Telegram channel</a> if you
                need help building your infrastructure.
              </p>
            </div>
          </div>
        </section>
        
        <Footer />
      </Layout>
    )
  }
}

export default Homepage

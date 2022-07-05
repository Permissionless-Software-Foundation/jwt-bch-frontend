import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import telegram from '../assets/images/telegram-200px.png'
import fullstackLogo from '../assets/images/fullstackcash-Grey.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Consulting'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Get the Help Your Business Needs</h2>
              </header>
            </div>

            <div className="col-12">
              <p>
                FullStack.cash is part of
                the <a href="https://psfoundation.cash" target="_blank">Permissionless
                Software Foundation</a>, a network of independent developers
                around the globe, focusing on Bitcoin Cash. We can help connect
                you with the developer resources your company needs.
              </p>
            </div>
          </div>

          <div className="grid-wrapper" style={{ border: 'solid 1px black' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <a href="https://t.me/slp_devs_for_hire" style={{borderBottom: 'none'}}>
                <span className="image">
                  <img src={telegram} alt="" />
                </span>
                <h3>SLP Token Devs for Hire</h3>
              </a>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <p>
                This Telegram channel is moderated by staff from FullStack.cash.
                It was created for entrepreneurs to find developers who have
                experience with SLP tokens and Bitcoin Cash. It's a simple, free
                way for you to find an independent developer or your next employee.
              </p>

              <ul className="actions">
                <li>
                  <a href="https://t.me/slp_devs_for_hire" className="button">
                    Join
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid-wrapper" style={{ border: 'solid 1px black', marginTop: '25px' }}>
            <div className="col-6" style={{ padding: '20px' }}>
              <a href="/contact" style={{borderBottom: 'none'}}>
                <span className="image">
                  <img src={fullstackLogo} alt="" />
                </span>
                <h3>FullStack.cash Consulting Services</h3>
              </a>
            </div>

            <div className="col-6" style={{ padding: '20px' }}>
              <p>
                FullStack.cash can provide the developer talent to help you
                achieve your business goals. We specialize in
                developing <a href="https://cashstack.info" target="_blank">infrastructure</a> and
                <a href="https://psfoundation.info" target="_blank">software maintained by the PSF</a>.
              </p>
              <p>
                If you have an app idea and would like help from FullStack.cash,
                we are available for at a rate of $100 per hour for long-term
                contracts (30+ days), or $150 per hour for short-term tasks.
              </p>

              <ul className="actions">
                <li>
                  <a href="/contact" className="button">
                    Contact Us
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

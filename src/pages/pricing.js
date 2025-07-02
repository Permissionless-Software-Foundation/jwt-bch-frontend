import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render () {
    const siteTitle = 'Pricing'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id='five' className='main style1 special'>
          <div className='grid-wrapper'>
            <div className='col-12'>
              <header className='major'>
                <h2>Private Infrastructure</h2>
              </header>
              <p>
                Our larger clients have us host private, customized
                infrastructure for them. This is the same infrastructure listed
                on the <a href='/cashstrap'>CashStrap page</a>. Each instance is
                isolated so that only the client and the client's users have
                access to the resource. This is in contrast to the $14.99 per
                month tier, which is a shared resource.
              </p>
              <p>
                Recommended maximum capacity is 2 million API requests per day per
                instance of infrastructure. Multiple instances can be connected
                in parallel to scale infinately to higher loads. Prices are in
                USD.
              </p>

              <table style={{ border: '1px solid black' }}>
                <thead>
                  <tr>
                    <th>Infrastructure</th>
                    <th>Price per Month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bch-api REST API</td>
                    <td>$60</td>
                  </tr>
                  <tr>
                    <td>BCHN Full Node</td>
                    <td>$150</td>
                  </tr>
                  <tr>
                    <td>eCash Full Node</td>
                    <td>$150</td>
                  </tr>
                  <tr>
                    <td>Fulcrum ElectrumX Indexer</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>SLP Indexer</td>
                    <td>$100</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Homepage

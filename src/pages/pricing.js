import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Footer from '../components/Footer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Pricing'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>How much does FullStack.cash cost?</h2>
              </header>
              <p>
                FullStack.cash maintains the software infrastructure that apps
                need to interact with rapidly-changing Bitcoin Cash technology:
              </p>
            </div>

            <div className="col-3"></div>
            <div className="col-6" style={{textAlign: 'left'}}>
              <ul>
                <li>Archival Full Node with a full copy of the blockchain and RPC interface.</li><br />
                <li>Multiple indexers for accessing address balances and UTXO information.</li><br />
                <li>SLPDB for working with SLP tokens</li><br />
                <li>REST API providing a common interface for all the other infrastructure.</li><br />
                <li>JavaScript npm libraries and <a href="/examples">quick start examples</a>.</li><br />
              </ul>
            </div>
            <div className="col-3"></div>

            <div className="col-12">
              <p>
                You can <b>get started for free</b>, and paid tiers are available
                for businesses with greater resource needs.
              </p>

              <table style={{ border: '1px solid black' }}>
                <thead>
                  <tr>
                    <th>Tiers:</th>
                    <th>Anonymous</th>
                    <th>Free</th>
                    <th>Full-Stack</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price per month:</td>
                    <td>$0</td>
                    <td>$0</td>
                    <td>$30</td>
                    <td><a href="/contact">Contact Us</a></td>
                  </tr>
                  <tr>
                    <td>Full Node RPM:</td>
                    <td>3</td>
                    <td>10</td>
                    <td>100</td>
                    <td><a href="/contact">Contact Us</a></td>
                  </tr>
                  <tr>
                    <td>Indexer RPM:</td>
                    <td>3</td>
                    <td>10</td>
                    <td>100</td>
                    <td><a href="/contact">Contact Us</a></td>
                  </tr>
                  <tr>
                    <td>SLPDB RPM:</td>
                    <td>3</td>
                    <td>10</td>
                    <td>100</td>
                    <td><a href="/contact">Contact Us</a></td>
                  </tr>
                </tbody>
              </table>

              <p>
                RPM stands
                for 'requests per minute'. The row at the top indicates the tier
                that your API key unlocks.
              </p>
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
                <a href="/" className="button">
                  Learn More
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

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

        <section
          id="three"
          className="main style1 special"
          style={{ paddingBottom: '0px' }}
        >
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>How much does FullStack.cash cost?</h2>
              </header>
            </div>

            <div className="col-12">
              <p>
                You can <b>get started for free</b>, and paid tiers are
                available for businesses with greater resource needs.
              </p>
              <p>
                Note: Free access is artifically delayed, to prevent freeloaders
                from overloading the system. These delays are removed for paid
                tiers.
              </p>

              <table style={{ border: '1px solid black' }}>
                <thead>
                  <tr>
                    <th>Tiers:</th>
                    <th>Free</th>
                    <th>Tier 1</th>
                    <th>Tier 2</th>
                    <th>Tier 3</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price per month:</td>
                    <td>$0</td>
                    <td>$9.99</td>
                    <td>$19.99</td>
                    <td>$29.99</td>
                    <td>
                      <a href="/contact">Contact Us</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Full Node RPM:</td>
                    <td>10</td>
                    <td>100</td>
                    <td>250</td>
                    <td>600</td>
                    <td>
                      <a href="/contact">Contact Us</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Fulcrum Indexer RPM:</td>
                    <td>10</td>
                    <td>100</td>
                    <td>250</td>
                    <td>600</td>
                    <td>
                      <a href="/contact">Contact Us</a>
                    </td>
                  </tr>
                  <tr>
                    <td>SLP Indexer RPM:</td>
                    <td>10</td>
                    <td>100</td>
                    <td>250</td>
                    <td>600</td>
                    <td>
                      <a href="/contact">Contact Us</a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                RPM stands for 'requests per minute'. The row at the top
                indicates the tier that your API key unlocks.
              </p>
            </div>

            <div className="col-12">
              <p>
                FullStack.cash maintains the{' '}
                <a href="/cashstrap">software infrastructure</a> that apps need
                to interact with rapidly-changing Bitcoin Cash technology:
              </p>
            </div>

            <div className="col-3"></div>
            <div className="col-6" style={{ textAlign: 'left' }}>
              <ul>
                <li>
                  Archival Full Node with a full copy of the blockchain and RPC
                  interface.
                </li>
                <br />
                <li>
                  Multiple indexers for accessing address balances and UTXO
                  information.
                </li>
                <br />
                <li>SLP indexer for working with SLP tokens</li>
                <br />
                <li>
                  REST API providing a common interface for all the other
                  infrastructure.
                </li>
                <br />
                <li>
                  JavaScript npm libraries and{' '}
                  <a href="/examples">quick start examples</a>.
                </li>
                <br />
              </ul>
            </div>
            <div className="col-3"></div>
          </div>
        </section>

        <section
          id="four"
          className="main special"
          style={{ backgroundColor: '#DDD' }}
        >
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

        <section id="five" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Private Infrastructure</h2>
              </header>
              <p>
                Our larger clients have us host private, customized
                infrastructure for them. This is the same infrastructure listed
                on the <a href="/cashstrap">CashStrap page</a>. Each instance is
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
                    <td>ABC Full Node</td>
                    <td>$150</td>
                  </tr>
                  <tr>
                    <td>BCHN Full Node</td>
                    <td>$150</td>
                  </tr>
                  <tr>
                    <td>Fulcrum ElectrumX Indexer</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>SLP Indexer</td>
                    <td>$200</td>
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

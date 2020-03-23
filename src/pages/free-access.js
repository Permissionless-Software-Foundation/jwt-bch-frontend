/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Footer from '../components/Footer'

// Page specific components
import FreeAccessForm from '../components/free-access'

const FreeAccess = props => (
  <Layout>
    <Helmet>
      <title>Free Access</title>
      <meta
        name="free access"
        content="Apply for free access."
      />
    </Helmet>

    <div id="contact" className="alt">
      <section >
        <div className="inner">
          <header className="major">
            <h1>Apply for Free Access</h1>
          </header>

              <p>
                <b>
                Do you have an awesome Bitcoin Cash project? FullStack.cash provides
                free access to selected projects in order to support the BCH
                community. Describe your project in the message below and let
                us know how to contact you. If selected, you will recieve $100
                in free credit.
                </b>
              </p>
              <p>
                Also, be sure to introduce yourself
                in <a href="https://t.me/permissionless_software">our
                Telegram channel</a>.
              </p>
          <FreeAccessForm />
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
)

export default FreeAccess

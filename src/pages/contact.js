/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Footer from '../components/Footer'

// Page specific components
import ContactForm from '../components/contact-form'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Contact Us</title>
      <meta
        name="contact"
        content="Contact FullStack.cash"
      />
    </Helmet>

    <div id="contact" className="alt">
      <section >
        <div className="inner">
          <header className="major">
            <h1>Contact Us</h1>
          </header>

              <p>
                <b>
                Fill out the form below to send an email to the organization
                running this website.
                </b>
              </p>

              <h4><b>You can also reach the community by
              joining <a href="https://t.me/permissionless_software">this
              Telegram channel</a>.</b></h4>
          <ContactForm />
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
)

export default Generic

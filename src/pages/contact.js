/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// Page specific components
import ContactForm from '../components/contact-form'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Buy Trout's Bitcoin Cash JavaScript Toolkit</title>
      <meta
        name="description"
        content="Buy Trout's Bitcoin Cash JavaScript Toolkit"
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
          <ContactForm />
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

import LoginForm from '../components/login-form'
import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import qrcode from '../assets/images/testnet-addr.png'

const SERVER = process.env.AUTHSERVER

const BchAddress = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`
const PriceP = styled.p`
  text-align: left;
  font-size: 24px;
`

const Span1 = styled.span`
  color: #000000;
`

const BizPlanButton = styled.a`
  margin-bottom: 25px;
`

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usdPerToken: 0,
      usdPerBCH: 0,
      bchBalance: 0,
      tokenBalance: 0,
    }
  }

  render() {
    const siteTitle = 'API Keys for api.bchjs.cash'

    return (
      <Layout loading="loading">
        <div className={`body`}>
          <Helmet title={siteTitle} />

          <section id="two" className="main style2">
            <div className="grid-wrapper">
              <div className="col-3" />
              <div className="col-6">
                <center>
                  <h2>Get Your API Key</h2>
                  <p>
                    This site distributes API keys for the <a href="https://api.bchjs.cash"
                    target="_blank">api.bchjs.cash</a> REST API. Enter your email and
                    password below to create an account or login.
                  </p>
                  <LoginForm />
                </center>
              </div>
              <div className="col-3" />
            </div>

            <div className="grid-wrapper">
              <div className="col-3" />
              <div className="col-6">
                <p>
                  If you need help or have questions, join our <a href="https://t.me/bch_js_toolkit"
                  target="_blank">Telegram channel</a>.
                </p>
              </div>
              <div className="col-3" />
            </div>

          </section>
        </div>
      </Layout>
    )
  }

  // React Lifecycle - component has mounted.
  async componentDidMount() {
    // If user is already logged in, forward them to the private area.
    if (isLoggedIn()) {
      navigate(`/profile`)
    }
  }
}

export default Homepage

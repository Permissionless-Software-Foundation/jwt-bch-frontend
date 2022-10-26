import React from 'react'
import Helmet from 'react-helmet'
import 'isomorphic-fetch'
import Footer from '../components/Footer'

import Layout from '../components/layout'
import PSFIMG from '../assets/images/favicon.png'
import CircularProgress from '@material-ui/core/CircularProgress'

import NOTIFICATION from '../lib/notification'
import Captcha from '../components/captcha'

const Notification = new NOTIFICATION()

const SERVER = 'https://faucet-api.fullstack.cash'
// const SERVER = `http://localhost:7654`

let _this
class Homepage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      balance: '0.00',
      bchAddr: '',
      outWell: '',
      succes: false,
      inFetch: false,
      txId: '',
      captchaIsValid: false
    }

    _this = this
    this.Notification = Notification
  }

  render () {
    const siteTitle = 'Testnet Faucet - FullStack.cash'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <section className='faucet-container1'>
          <div className='container'>
            <div className='row well well-lg'>
              <div className='col-md-10'>
                <h2>
                  This Faucet is no longer available.
                </h2>
                <h3 className='lead'>
                  A new faucet can be found at
                  <a href='https://tbch.googol.cash/'>
                    https://tbch.googol.cash/
                  </a>
                </h3>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }

  componentDidMount () {
    _this.getBalance()
  }

  goToUrl (url) {
    window.open(url)
  }

  handleUpdate (event) {
    _this.setState({
      [event.target.name]: event.target.value
    })
  }

  async getBalance () {
    try {
      const resp = await fetch(`${SERVER}/coins`)
      const body = await resp.json()
      console.log(`body: ${JSON.stringify(body, null, 2)}`)
      const balance = body.balance / 100000000

      _this.setState({
        balance
      })

      // $('#balance').text(balance)
    } catch (err) {
      console.error('Error in getBalance(): ', err)
      _this.Notification.notify('Error', err.message, 'danger')
    }
  }

  async requestBCH () {
    console.log('request')
    _this.setState({
      succes: false,
      inFetch: true,
      txId: ''
    })
    try {
      if (!_this.state.captchaIsValid) {
        throw new Error('Catpcha is Invalid')
      }

      const bchAddr = _this.state.bchAddr // $('#bchAddr').val()

      if (bchAddr === '' || !bchAddr) {
        _this.appendToWell('Error: BCH Address can not be blank')
        _this.Notification.notify(
          'Error',
          'BCH Address can not be blank',
          'danger'
        )

        _this.setState({
          inFetch: false
        })
        return
      }

      const resp = await fetch(`${SERVER}/coins/${bchAddr}`)

      const body = await resp.json()
      console.log(`body: ${JSON.stringify(body, null, 2)}`)

      if (!body.success) {
        const message = body.message

        if (message === 'Invalid BCH cash address.') {
          _this.appendToWell('Error: Invalid BCH testnet address')
          _this.Notification.notify(
            'Error',
            'Invalid BCH testnet address',
            'danger'
          )
        } else {
          _this.appendToWell(
            'Error: This BCH address has been used before, or you need to wait 24 hours to request from this IP address.'
          )
          _this.Notification.notify(
            'Error',
            'This BCH address has been used before, or you need to wait 24 hours to request from this IP address.',
            'danger',
            5000
          )
        }
        _this.setState({
          inFetch: false
        })
        return
      }

      _this.Notification.notify(
        'SUCCESS!',
        'Success: tBCH are on their way!',
        'success'
      )

      // _this.appendToWell(`Success: tBCH are on their way!'`)
      // _this.writeToWell(body.txid)
      _this.setState({
        succes: true,
        inFetch: false,
        txId: body.txid
      })

      // Scroll To txId
      setTimeout(() => {
        const outWellElmnt = document.getElementById('outWell')
        outWellElmnt &&
          outWellElmnt.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
          })
      }, 250)

      // Update balance
      setTimeout(() => {
        _this.getBalance()
      }, 2000)
    } catch (err) {
      _this.setState({
        inFetch: false
      })
      console.log('Error in requestBCH: ', err)
      _this.Notification.notify('Error', err.message, 'danger')
    }
  }

  // Gets the current text in the output well.
  getWellText () {
    console.log(_this.state.outWell)
    return _this.state.outWell
    // return $('#outWell').text()
  }

  // Overwrites any content in the output well.
  writeToWell (str) {
    // $('#outWell').text(str)
    _this.setState({
      outWell: str
    })
    console.log(str)
  }

  // Appends a string as a new line to the output well.
  appendToWell (str) {
    let wellText = _this.state.outWell
    wellText = wellText + '\n' + str
    _this.setState({
      outWell: wellText
    })
    console.log(wellText)

    // let wellText = $('#outWell').text()

    //

    // $('#outWell').text(wellText)
  }

  captchaState (isValid) {
    console.log('Catpcha State', isValid)
    _this.setState({
      captchaIsValid: isValid
    })
  }
}

export default Homepage

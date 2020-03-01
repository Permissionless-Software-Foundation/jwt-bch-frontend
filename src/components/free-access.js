/* eslint-disable */

/*
  This is a simple order form component. After a user fills out the form,
  an email will be generated.
*/

import React from 'react'
import styled from 'styled-components'
//import BadgerButton from './badger-button'
import Captcha from './captcha'
import NOTIFICATION from '../lib/notification'
const Notification = new NOTIFICATION()

// const SERVER = `https://bchjs.cash/api`
const SERVER = `http://localhost:5001`

const StyledButton = styled.a`
  margin: 10px;
  margin-bottom: 25px;
  margin-left: 0px;
`

const OutMsg = styled.p`
  color: red;
  font-weight: bold;
  size: 18px;
`

let _this

class FreeAccessForm extends React.Component {
  constructor(props) {
    super(props)

    _this = this

    this.state = {
      message: '',
      name: '',
      email: '',
      formMessage: '',
      logStr: '',
      errStr: '',
      showPanel1: { display: 'inline' },
      showPanel2: { display: 'none' },
      showPanel3: { display: 'none' },
      showPanel4: { display: 'none' },
      bchAddr: '',
      //bchPrice: 200/DEFAULT_BCH_PRICE
      bchPrice: null,
      captchaIsValid: false
    }
    this.Notification = Notification
  }

  render() {
    return (
      <div>
        <div className="panel1" style={_this.state.showPanel1}>
          <form>
            <b>Name:</b> (How we should address you in email)
            <input
              type="text"
              name="name"
              onChange={this.handleUpdate}
              placeholder="John Doe"
            />
            <br />
            <b>Email:</b>
            <input
              type="text"
              name="email"
              onChange={this.handleUpdate}
              placeholder="your@email.com"
            />
            <br />
            <b>Message:</b>
            <textarea
              name="formMessage"
              onChange={this.handleUpdate}
              placeholder=""
              rows="3"
            />
            <br />
            <OutMsg>{this.state.message}</OutMsg>
            <br />
            <Captcha callback = {_this.captchaState}/>
            <br />
            <a
              href="#"
              className="button special badger-button contact-button"
              //onClick={this.invokeBadger}
              onClick={this.clickSubmitForm}
              data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
            >
              Send Message
            </a>
          </form>
        </div>

        <div className="panel2" style={_this.state.showPanel2}>
          <h2><b>Thank you!</b></h2>
          <p>
            An email has been dispatched to the site owner. We will respond as
            soon as possible.
          </p>
        </div>

        <div className="panel3" style={_this.state.showPanel3}>
          <center>
            <h2>
              <b>Please send payment to this BCH address to complete your order.</b>
            </h2>
            <p>
              Send{' '}
              <u>
                <b>{_this.state.bchPrice} BCH</b>
              </u>{' '}
              to the address below.
            </p>
          </center>
        </div>

        <div className="panel4" style={_this.state.showPanel4}>
          <h2><b>Error!</b></h2>
          <p>
            An error occured. Try reloading this page and trying again. If it
            continues, please try again later.
          </p>
        </div>
      </div>
    )
  }

  componentDidMount() {}

  async clickSubmitForm(event) {
    try {
      event.preventDefault()

      _this.validateForm(_this.state)

      _this.submitOrderFormData()

      //_this.submitOrderFormData()
    } catch (err) {
      // Display the error on the DOM.
      _this.Notification.notify('Error',  err.message,'danger')

/*       _this.setState(prevState => ({
        message: `Error while trying to submit contact form: ${err.message}`,
      })) */
    }
  }

  // This function is called after a successful payment with Badger Wallet.
  // It submits the txid and token data to the server.
  // The server then validates the TXID and creates the token.
  async submitOrderFormData() {
    try {
      console.log(`Entered submitOrderFormData().`)

      const obj = {
        name: _this.state.name,
        email: _this.state.email,
        formMessage: _this.state.formMessage,
      }

      const resp = await fetch(`${SERVER}/contact/email`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ obj }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await resp.json()

      console.log(`data: ${JSON.stringify(data, null, 2)}`)

      if (data.success) {
        _this.Notification.notify( 'Success!!','Thank you!', 'success')

        // Hide  the 1st panel and show the second.
        _this.setState(prevState => ({
          showPanel1: { display: 'none' },
          showPanel2: { display: 'inline' },
        }))
      } else {
        _this.Notification.notify('Error',  'An error occured.','danger')

        // Hide  the 1st panel and show the second.
        _this.setState(prevState => ({
          showPanel1: { display: 'none' },
          showPanel4: { display: 'inline' },
        }))
      }
    } catch (err) {
      console.log(`Error in submitOrderFormData(): `, err)
	  _this.Notification.notify('Error',  'An error occured.','danger')

      // Hide  the 1st panel and show the second.
      _this.setState(prevState => ({
        showPanel1: { display: 'none' },
        showPanel4: { display: 'inline' },
      }))
    }
  }

  // Validates the raw form input. Throws error if input is not valid.
  validateForm(state) {
    const email = state.email
    if (!email || email === '') {
      throw new Error(`Email can not be empty`)
    }
    const isEmail =  _this.validateEmail(email)
    if (!isEmail) {
      throw new Error(`Email must be Email Format`)
    }

    const message = state.formMessage
    if (!message || message === '') {
      throw new Error(`Message can not be empty`)
    }
    const captchaState = _this.state.captchaIsValid

    if(!captchaState){
      throw new Error(`Catpcha is Invalid`)
    }

    return state
  }

  // Reactive event handler updates state as user types in the form inputs.
  handleUpdate(event) {
    _this.setState({
      [event.target.name]: event.target.value,
    })
  }
  captchaState(isValid){
    console.log('Catpcha State',isValid)
    _this.setState({
      captchaIsValid:isValid
    })
  }
  validateEmail(email)
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      return (false)
  }
}

export default FreeAccessForm

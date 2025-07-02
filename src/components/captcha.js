/* eslint-disable */

/*
  This is a simple order form component. After a user fills out the form,
  an email will be generated.
*/

import React from 'react'
import PropTypes from 'prop-types'
// import ClientCaptcha from 'react-client-captcha'
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import reload from '../assets/images/refresh-svgrepo-com.svg'
let _this

class Captcha extends React.Component {
  constructor(props) {
    super(props)

    _this = this

    this.state = {
      code: '',
      value: '',
    }
    // this.Notification = Notification
  }

  render() {
    return (
      <div className="captcha-container">
        <div className="captcha-content">
        <LoadCanvasTemplateNoReload />

        </div>
        <div className="captcha-content">
        <img width={20} src={reload} />

        </div>

        <br />
        <input
          id="captchaValue"
          type="text"
          name="value"
          value={_this.state.value}
          onChange={this.handleUpdate}
        /> 
      </div>
    )
  }

  componentDidMount () {
    loadCaptchaEnginge(6); 
 };
  handleUpdate(event) {
    const element = document.getElementById('captchaValue')
    const value =  event.target.value

    _this.setState({
      [event.target.name]: value,
    })

    if (validateCaptcha(value, false)) {
      // change input color
      element.style.borderColor = 'green'
      _this.props.callback(true) // set captchad state as true
     // alert('Captcha Matched');

    } else {
      element.style.borderColor = 'red'
     // _this.props.callback(false)
      //alert('Captcha Does Not Match');
    }

    if(value.length === 6 && !validateCaptcha(value)){
      // reload  captcha  and reset input on invalid match
      _this.setState({
        [event.target.name]: '',
      })

    }

  }


}
Captcha.propTypes = {
  callback: PropTypes.func,
}

export default Captcha

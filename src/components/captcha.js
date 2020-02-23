/* eslint-disable */

/*
  This is a simple order form component. After a user fills out the form,
  an email will be generated.
*/

import React from 'react'
import PropTypes from 'prop-types'
import ClientCaptcha from 'react-client-captcha'

let _this

class Captcha extends React.Component {
  constructor(props) {
    super(props)

    _this = this

    this.state = {
      code: '',
      value: '',
    }
    this.Notification = Notification
  }

  render() {
    return (
      <div className="captcha-container">
        <div className="captcha-content">
          <ClientCaptcha
            captchaCode={code => {
              // console.log(code)
              this.setState({ code: code })
            }}
          />
        </div>

        <br />
        <input
          id="captchaValue"
          type="text"
          name="value"
          onChange={this.handleUpdate}
        />
      </div>
    )
  }
  handleUpdate(event) {
    const element = document.getElementById('captchaValue')
    console.log(element.style.borderColor)
    _this.setState({
      [event.target.name]: event.target.value,
    })

    if (event.target.value === _this.state.code) {
      element.style.borderColor = 'green'
      _this.props.callback(true)
    } else {
      element.style.borderColor = 'red'
      _this.props.callback(false)
    }
  }
}
Captcha.propTypes = {
  callback: PropTypes.func,
}

export default Captcha

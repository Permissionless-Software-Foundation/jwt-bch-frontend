import React from 'react'
import Layout from '../components/layout'
var QRCode = require('qrcode.react')
import styled from 'styled-components'
import { navigate } from 'gatsby'
import ChangePassword from '../components/change-password'
import '../components/profile.css'

import { getUser, setUser, isLoggedIn, logout, getExpirationDate } from '../services/auth'
import { updateUser } from '../services/users'

import NOTIFICATION from '../lib/notification'
const Notification = new NOTIFICATION()

const SERVER = process.env.AUTHSERVER

const StyledButton = styled.a`
  margin: 10px;
  margin-bottom: 25px;
`

const OutMsg = styled.p`
  color: red;
  font-weight: bold;
  size: 18px;
`

let _this

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bchAddr: '',
      credit: 0,
      apiLevel: 40,
      apiToken: '',
      apiTokenExp: '',
      username: '',
      message: '',
      id: '',
      userJwt: '',
      name: '',
      email: '',
      editField_name: '',
      editField_username: '',
      editField_email: '',
    }

    _this = this
    this.Notification = Notification

  }

  async  verifyTokenExpiration() {
    const result = await getExpirationDate()


    // If the expiration data are not found returns -1
    // indicating that should redirect to login
    if (!result || !result.now || !result.exp) {
      return -1
    }

    // Dates in ISO format, example --> '2020-10-22T23:27:11.000Z'
    // Testing purposes
    // const now = new Date('2020-10-23T21:27:11.000')
    // const exp = new Date('2020-10-23T22:26:11.000Z')

    const now =  new Date(result.now)
    const exp =  new Date(result.exp)

    const dateDiff = exp.getTime() - now.getTime()
    const hourDiff = Math.floor(dateDiff / 1000 / 60 / 60)
    // console.log('hourDiff',hourDiff)

    return hourDiff
  }

  async componentDidMount() {
    const userData = await getUser()
    console.log(`userData.userdata: ${JSON.stringify(userData.userdata, null, 2)}`)
    const hourDiff = await _this.verifyTokenExpiration()

    // If the user is not logged in, send them back to the home page.
    // Redirects to login page if the token expires in less than an hour
    if (!userData.userdata || hourDiff < 1) {
      // navigate(`/`)
      logout(() => navigate(`/`))
      return
    }

    let apiToken = ''
    if (userData.userdata.user.apiToken)
      apiToken = userData.userdata.user.apiToken

    let apiTokenExp = ''
    if (userData.userdata.user.apiTokenExp) {
      const expDate = new Date(userData.userdata.user.apiTokenExp)
      apiTokenExp = expDate.toString()

    }
    //
    // this.data.credit = userData.userdata.user.credit
    // this.data.bchAddr = userData.userdata.user.bchAddr
    // console.log(`this.data: ${JSON.stringify(this.data,null,2)}`)

    // if(typeof window !== undefined) window.component = this
    this.setState(prevState => ({
      bchAddr: userData.userdata.user.bchAddr,
      credit: userData.userdata.user.credit,
      apiToken: apiToken,
      apiLevel: userData.userdata.user.apiLevel,
      username: userData.username,
      name: userData.userdata.user.name,
      email: userData.userdata.user.email,
      message: '',
      id: userData.userdata.user._id,
      userJwt: userData.jwt,
      apiTokenExp: apiTokenExp,
    }))
  }

  render() {
    return (
      <Layout>
        <div className="content-profile">
          <div className="your-profile">
            <div className="profile-title">
              <h2>Your Profile</h2>
            </div>

            <ul>
              <li onClick={() => _this.editField('email')}>
                Email:
                {!_this.state.editField_email && _this.state.email ? (
                  <strong>{this.state.email}</strong>
                ) : (
                    <input
                      id="editField_email"
                      name="email"
                      type="text "
                      defaultValue={_this.state.editField_email}
                      onChange={_this.handleUpdate}
                      onBlur={_this.resetFieldToEdit}
                      onKeyDown={_this.handleKeyDown}
                      placeholder="Enter Email"
                    ></input>
                  )}
              </li>
              <li onClick={() => _this.editField('username')}>
                UserName:
                {!_this.state.editField_username && _this.state.username ? (
                  <strong>{_this.state.username}</strong>
                ) : (
                    <input
                      id="editField_username"
                      name="username"
                      type="text "
                      defaultValue={_this.state.editField_username}
                      onChange={_this.handleUpdate}
                      onBlur={_this.resetFieldToEdit}
                      onKeyDown={_this.handleKeyDown}
                      placeholder="Enter username"
                    ></input>
                  )}
              </li>
              <li onClick={() => _this.editField('name')}>
                Name:
                {!_this.state.editField_name && _this.state.name ? (
                  <strong>{_this.state.name}</strong>
                ) : (
                    <input
                      id="editField_name"
                      name="name"
                      type="text "
                      defaultValue={_this.state.editField_name}
                      onChange={_this.handleUpdate}
                      onBlur={_this.resetFieldToEdit}
                      onKeyDown={_this.handleKeyDown}
                      placeholder="Enter name"
                    ></input>
                  )}
              </li>
              <li>
                API Level: <strong>{this.state.apiLevel}</strong>
              </li>
              <li>
                API JWT Token: <br />
                {this.state.apiToken && <strong> {this.state.apiToken}</strong>}
              </li>
              <li>
                JWT Token Expiration:
                {<strong>  {_this.state.apiTokenExp}</strong>}
              </li>
              <li>
                Credit:
                {this.state.credit && (
                  <strong> ${this.round(this.state.credit)}</strong>
                )}
              </li>
              <li>
                BCH deposit:{' '}
                {this.state.bchAddr && <strong>{this.state.bchAddr}</strong>}
              </li>
            </ul>
            <ChangePassword />
          </div>

          <div className="actions-profile">
            <div className="profile-title">
              <h2>Update Credit</h2>
            </div>
            <div>
              <center>
                <QRCode value={this.state.bchAddr} />
              </center>
              <div className="footer">
                <center>
                  <StyledButton
                    href="#"
                    className="button special"
                    id="checkCreditBtn"
                    onClick={this.getCredit}
                  >
                    Update Credit
                  </StyledButton>
                </center>
              </div>
            </div>
          </div>
          <div className="actions-profile">
            <div className="profile-title">
              <h2>Get API Token</h2>
            </div>
            <div className="body">
              <center className="select-token">
                <div>
                  <select
                    id="selectTier"
                    onChange={this.handleDropDown}
                    value={this.state.apiLevel}
                  >
                    <option defaultValue="40">100 RPM ($14.99/mo)</option>
                  </select>
                </div>
              </center>
            </div>
            <div className="footer">
              <center>
                <StyledButton
                  href="#"
                  className="button special"
                  id="getJWTBtn"
                  onClick={this.getJwt}
                >
                  Get API Token
                </StyledButton>
              </center>
            </div>

            <br />
          </div>

          <OutMsg>{this.state.message}</OutMsg>
        </div>

        <br />
        <br />

        <div className="grid-wrapper">
          <div className="col-12" style={{border: 'solid black 1px', padding: '20px'}}>
          <h2>
            <u>How to use your JWT token</u>
            </h2>
            Your API JWT Token is used to unlock increased rate limits. Follow the
            directions in the{' '}
            <a
              href="https://github.com/christroutner/bch-js#api-key"
              target="_blank"
            >
              bch-js README
            </a> or <a href="/examples">the video on the examples page</a>
            . Copy the text into the <code>BCHJSTOKEN</code> environment variable
            to use it <i>implicitly</i>, or use it <i>explictly</i> by setting the{' '}
            <code>apiToken</code>
            property when instantiating the bch-js library.
          </div>
        </div>

        <div className="content-profile">
          <button
            className="button  special"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
            }}
          >
            Logout
          </button>
        </div>
        <br />
      </Layout>
    )
  }

  validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  async handleKeyDown(e) {
    // if user press esc, cancel edit
    if (e.key === 'Escape') {
      _this.resetFieldToEdit()
      return
    }
    // if user press enter
    if (e.key === 'Enter') {
      const fieldName = `editField_${e.currentTarget.name}`

      const user = getUser()
      // Get value from field
      let fieldValue = _this.state[fieldName]

      //Delete blank space
      if (fieldValue[0] === ' ') {
        fieldValue = _this.state[fieldName].substr(1)
      }
      const name = e.currentTarget.name
      if (name === 'email') {
        const isEmail = _this.validateEmail(fieldValue)
        if (!isEmail) {
          _this.Notification.notify('Error', 'Incorrect Email format', 'danger')
          return
        }
      }
      // Model to update
      const userUpdated = {
        [e.currentTarget.name]: fieldValue,
        _id: user.userdata.user._id,
      }
      // try to update user data
      try {
        const updateResult = await updateUser(userUpdated)
        _this.setState({
          [fieldName]: '',
          [name]: updateResult['user'][name],
        })
      } catch (error) {
        _this.Notification.notify('Error', 'This email already exists', 'danger')
      }
    }
  }
  // On change value
  handleUpdate(event) {
    if (!event.target.value) {
      event.target.value = ' ' // add blank space for  field input persist
    }
    const fieldName = `editField_${event.target.name}`
    _this.setState({
      [fieldName]: event.target.value,
    })
  }
  // Reset input values and state values
  resetFieldToEdit() {
    const doc_A = document.getElementById('editField_email')
    const doc_B = document.getElementById('editField_username')
    const doc_C = document.getElementById('editField_name')
    doc_A ? (doc_A.value = '') : ''
    doc_B ? (doc_B.value = '') : ''
    doc_C ? (doc_C.value = '') : ''

    _this.setState(prevState => ({
      editField_email: '',
      editField_name: '',
      editField_username: '',
    }))
  }
  // Edit field to update
  editField(field) {
    const fieldName = `editField_${field}`

    _this.setState(prevState => ({
      [fieldName]: _this.state[field],
    }))
    setTimeout(() => {
      const myElement = document.getElementById(fieldName)
      myElement && myElement.focus()
    }, 250)
  }

  // Round to two decimal places
  round(num) {
    let tmp = num * 100
    tmp = Math.round(tmp)
    tmp = tmp / 100
    return tmp
  }

  // Button click handler. Asks server to check BCH address and update credit
  // if BCH is found.
  async getCredit(event) {
    let fetchData
    let notificationType

    try {
      event.preventDefault()

      _this.setState(prevState => ({
        message: 'Checking BCH address...',
      }))

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_this.state.userJwt}`,
        },
      }
      fetchData = await fetch(
        `${SERVER}/apitoken/update-credit/${_this.state.id}`,
        options
      )

      let credit = 0
      let data = {}

      data = await fetch(`${SERVER}/apitoken/update-credit/${_this.state.id}`, options)

      credit = await data.json()
      console.log(`credit: ${credit}`)

      _this.setState(prevState => ({
        credit: credit,
        message: 'BCH address checked. Credit updated.',
      }))

      notificationType = 'success'

    } catch (err) {
      // console.log(`fetchData: `, fetchData)
      // console.log(`fetchData.status: ${fetchData.status}`)

      if (fetchData.status === 409) {
        _this.setState(prevState => ({
          message: 'Wait a minute for the indexer to update.',
        }))
        return
      }

      console.error(`Error in getCredit(): `, err)
      _this.setState(prevState => ({
        // message: err.message,
        message: 'Error trying to get balance. Wait a minute for the indexer to update.',
      }))

      notificationType = 'danger'

    }

    // Throw Notification
    if (notificationType === 'danger') {
      _this.Notification.notify('ERROR!', _this.state.message, 'danger')
    } else {
      _this.Notification.notify('SUCCESS!', _this.state.message, 'success')
    }
  }

  // Click handler for when user wants to get a new JWT token.
  async getJwt(event) {
    let fetchData
    let notificationType
    try {
      event.preventDefault()

      _this.setState(prevState => ({
        message: 'Requesting new API JWT token...',
      }))

      // deprecated
      // Fix weird default-value bug.
      // console.log(`_this.state.apiLevel: ${_this.state.apiLevel}`)
      // if (typeof _this.state.apiLevel === 'string') {
      //   if (_this.state.apiLevel.indexOf('Free') > -1)
      //     _this.state.apiLevel = 10
      // }

      // Force the API level to be 40, since we only have one paid tier now.
      await _this.setState(prevState => ({
        apiLevel: 40
      }))

      console.log(`Requestion token for API level: ${_this.state.apiLevel}`)

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${_this.state.userJwt}`,
        },
        body: JSON.stringify({
          apiLevel: _this.state.apiLevel,
        }),
      }
      fetchData = await fetch(`${SERVER}/apitoken/new`, options)

      if (fetchData.status > 399)
        throw new Error(`Could not get new JWT token.`)

      const data2 = await fetchData.json()

      console.log(`apiToken: ${data2.apiToken}`)
      console.log(`apiLevel: ${data2.apiLevel}`)
      console.log(`apiTokenExp: ${data2.apiTokenExp}`)
      console.log(`new credit: ${data2.credit}`)

      let apiTokenExp = ''
      if (data2.apiTokenExp) {
        const expDate = new Date(data2.apiTokenExp)
        apiTokenExp = expDate.toString()
      }

      _this.setState(prevState => ({
        apiToken: data2.apiToken,
        apiLevel: data2.apiLevel,
        apiTokenExp: apiTokenExp,
        message: 'API JWT Token updated.',
        credit: data2.credit
      }))

      // Update user in localSotrage
      const userData = await getUser()
      userData.userdata.user.apiTokenExp = data2.apiTokenExp
      userData.userdata.user.apiToken = data2.apiToken
      await setUser(userData)

      notificationType = 'success'

    } catch (err) {
      if (fetchData && fetchData.status === 402) {
        _this.setState(prevState => ({
          message:
            'Not enough credit in your account. Send BCH to the address listed.',
        }))
        return
      }

      console.error(`Error in getJwt(): `, err)
      console.log(`err: ${JSON.stringify(err, null, 2)}`)

      _this.setState(prevState => ({
        message: err.message,
      }))
      notificationType = 'danger'

    }

    // Throw Notification
    if (notificationType === 'danger') {
      _this.Notification.notify('ERROR!', _this.state.message, 'danger')
    } else {
      _this.Notification.notify('SUCCESS!', _this.state.message, 'success')
    }

  }

  // Change handler for the tier-select drop-down menu.
  handleDropDown(event) {
    try {
      // console.log(`value: ${event.target.value}`)
      const newValue = event.target.value

      _this.setState(prevState => ({
        apiLevel: newValue,
      }))
    } catch (err) {
      console.error(`Error in handleDropDown(): `, err)
    }
  }
}

export default Profile

/*
// Old code that I might want later. Feel free to delete this section in the future.

<option defaultValue="10">Free ($0)</option>
<option value="40">Full Stack ($30/mo)</option>
*/

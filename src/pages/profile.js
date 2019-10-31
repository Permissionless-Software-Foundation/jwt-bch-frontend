import React from 'react'
import Layout from '../components/layout'
var QRCode = require('qrcode.react');
import styled from 'styled-components'
import { navigate } from 'gatsby'

const config = require("../../config")

import { getUser } from "../services/auth"

const SERVER = config.server;

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
      apiToken: '',
      username: '',
      message: '',
      id: '',
      userJwt: ''
    }

    _this = this
  }

  async componentDidMount() {
    const userData = await getUser()
    console.log(`userData: ${JSON.stringify(userData,null,2)}`)

    // If the user is not logged in, send them back to the home page.
    if(!userData.userdata) {
      navigate(`/`)
      return
    }

    let apiToken = ''
    if(userData.userdata.user.apiToken) apiToken = userData.userdata.user.apiToken
    //
    // this.data.credit = userData.userdata.user.credit
    // this.data.bchAddr = userData.userdata.user.bchAddr
    // console.log(`this.data: ${JSON.stringify(this.data,null,2)}`)

    // if(typeof window !== undefined) window.component = this
    this.setState(prevState => ({
      bchAddr: userData.userdata.user.bchAddr,
      credit: userData.userdata.user.credit,
      apiToken: apiToken,
      apiLevel: 0,
      username: userData.username,
      message: '',
      id: userData.userdata.user._id,
      userJwt: userData.jwt
    }))
  }

  render() {
    return (
      <Layout>
        <div style={{padding: '50px'}}>
          <h1>Your Profile</h1>
          <ul>
            <li>Name: {this.state.username}</li>
            <li>API JWT Token: <br />{this.state.apiToken}</li>
            <li>Credit: ${this.round(this.state.credit)}</li>
            <li>BCH deposit: {this.state.bchAddr}</li>

          </ul>

          <center><QRCode value={this.state.bchAddr} /></center>

          <br />
          <center><div>

          <StyledButton href="#" className="button special" id="checkCreditBtn"
          onClick={this.getCredit}>
            Update Credit
          </StyledButton>
          <br />
          <br />

          <select id="selectTier" onChange={this.handleDropDown} value={this.state.apiLevel}>
            <option defaultValue="0">Free ($0)</option>
            <option value="10">Full Node ($10/mo)</option>
            <option value="20">Indexer ($20/mo)</option>
          </select>


          <StyledButton href="#" className="button special" id="getJWTBtn"
          onClick={this.getJwt}>
            Get API Token
          </StyledButton>

          </div></center>
          <br />

          <OutMsg>{this.state.message}</OutMsg>
        </div>
      </Layout>
    )
  }

  // Round to two decimal places
  round(num) {
    let tmp = num*100
    tmp = Math.round(tmp)
    tmp = tmp / 100
    return tmp
  }

  // Button click handler. Asks server to check BCH address and update credit
  // if BCH is found.
  async getCredit(event) {
    let fetchData

    try {
      event.preventDefault()

      _this.setState(prevState => ({
        message: 'Checking BCH address...'
      }))

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${_this.state.userJwt}`
        }
      };
      fetchData = await fetch(`${SERVER}/apitoken/update-credit/${_this.state.id}`, options);

      const credit = await fetchData.json();
      console.log(`credit: ${credit}`)

      _this.setState(prevState => ({
        credit: credit,
        message: 'BCH address checked. Credit updated.'
      }))

    } catch(err) {
      // console.log(`fetchData: `, fetchData)
      // console.log(`fetchData.status: ${fetchData.status}`)

      if(fetchData.status === 409) {
        _this.setState(prevState => ({
          message: 'Wait a minute for the indexer to update.'
        }))
        return
      }

      console.error(`Error in getCredit(): `, err)
      _this.setState(prevState => ({
        message: err.message
      }))
    }
  }

  // Click handler for when user wants to get a new JWT token.
  async getJwt(event) {
    let fetchData

    try {
      event.preventDefault()

      _this.setState(prevState => ({
        message: 'Requesting new API JWT token...'
      }))

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${_this.state.userJwt}`
        },
        body: JSON.stringify({
          apiLevel: _this.state.apiLevel
        })
      };
      fetchData = await fetch(`${SERVER}/apitoken/new`, options);
      // console.log(`data: `, data)

      if(fetchData.status > 399) throw new Error(`Could not get new JWT token.`)

      const data2 = await fetchData.json();
      console.log(`apiToken: ${data2.apiToken}`)

      _this.setState(prevState => ({
        apiToken: data2.apiToken,
        message: 'API JWT Token updated.'
      }))

    } catch(err) {
      if(fetchData.status === 402) {
        _this.setState(prevState => ({
          message: 'Not enough credit in your account. Send BCH to the address listed.'
        }))
        return
      }

      console.error(`Error in getJwt(): `, err)
      console.log(`err: ${JSON.stringify(err,null,2)}`)

      _this.setState(prevState => ({
        message: err.message
      }))
    }
  }

  // Change handler for the tier-select drop-down menu.
  handleDropDown(event) {
    try {
      // console.log(`value: ${event.target.value}`)
      const newValue = event.target.value

      _this.setState(prevState => ({
        apiLevel: newValue
      }))
    } catch(err) {
      console.error(`Error in handleDropDown(): `, err)
    }
  }
}



export default Profile

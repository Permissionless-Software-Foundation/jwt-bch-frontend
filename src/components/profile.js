import React from 'react'
import { getUser } from '../services/auth'
var QRCode = require('qrcode.react')
import styled from 'styled-components'

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

let message = ''
let thisUserData = {}
let credit = 0

const Profile = () => {
  const userData = getUser()
  console.log(`userData: ${JSON.stringify(userData, null, 2)}`)

  thisUserData = userData

  let apiToken = ''
  if (userData.userdata.user.apiToken)
    apiToken = userData.userdata.user.apiToken

  credit = userData.userdata.user.credit
  const bchAddr = userData.userdata.user.bchAddr

  return (
    <div style={{ padding: '50px' }}>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {userData.username}</li>
        <li>API JWT Token: {apiToken}</li>
        <li>Credit: ${credit}</li>
        <li>BCH deposit: {bchAddr}</li>
      </ul>

      <QRCode value={bchAddr} />

      <br />
      <StyledButton
        href="#"
        className="button special"
        id="getJWTBtn"
        onClick={getJwt}
        data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
      >
        Get API Token
      </StyledButton>
      <br />

      <StyledButton
        href="#"
        className="button special"
        id="checkCreditBtn"
        onClick={getCredit}
        data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
      >
        Update Credit
      </StyledButton>
      <br />

      <OutMsg>{message}</OutMsg>
    </div>
  )
}

// Click handler for when user wants to get a new JWT token.
async function getJwt(event) {
  try {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${thisUserData.jwt}`,
      },
    }
    const data = await fetch(`${SERVER}/apitoken/new`, options)
    // console.log(`data: `, data)

    if (data.status > 399) throw new Error(`Could not get new JWT token.`)

    const data2 = await data.json()
    console.log(`apiToken: ${data2.apiToken}`)
  } catch (err) {
    // message = err.message
    // console.log(`message: ${message}`)
    console.error(`Error in getJwt(): `, err)
  }
}

async function getCredit(event) {
  try {
    event.preventDefault()

    const id = thisUserData.userdata.user._id

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${thisUserData.jwt}`,
      },
    }
    const data = await fetch(`${SERVER}/apitoken/update-credit/${id}`, options)

    credit = await data.json()
    console.log(`credit: ${credit}`)
  } catch (err) {
    // message = err.message
    // console.log(`message: ${message}`)
    console.error(`Error in getCredit(): `, err)
  }
}

export default Profile

import React from "react"
import { getUser } from "../services/auth"
var QRCode = require('qrcode.react');
import styled from 'styled-components'

const config = require("../../config")

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

let message = ''
let thisUserData = {}

const Profile = () => {
  const userData = getUser()
  console.log(`userData: ${JSON.stringify(userData,null,2)}`)

  thisUserData = userData

  let apiToken = ''
  if(userData.userdata.user.apiToken) apiToken = userData.userdata.user.apiToken

  const credit = userData.userdata.user.credit

  return (
    <div style={{padding: '50px'}}>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {userData.username}</li>
        <li>API JWT Token: {apiToken}</li>
        <li>Credit: ${credit}</li>
      </ul>

      <QRCode value={userData.userdata.user.bchAddr} />

      <br />
      <StyledButton href="#" className="button special" id="getJWTBtn"
      onClick={getJwt}
      data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al">
        Get API Token
      </StyledButton>
      <br />
      <OutMsg>{message}</OutMsg>
    </div>
  )
}



async function getJwt(event) {
  try {
    event.preventDefault()

    //_this.setState(prevState => ({
    //  message: "You clicked the Login button."
    //}))

    //console.log(`state: ${JSON.stringify(_this.state,null,2)}`)

    //await handleLogin(_this.state)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${thisUserData.jwt}`
      }
    };
    const data = await fetch(`${SERVER}/apitoken/new`, options);
    // console.log(`data: `, data)

    if(data.status > 399) throw new Error(`Could not get new JWT token.`)

    const users = await data.json();
    console.log(`users: ${JSON.stringify(users, null, 2)}`);

    // navigate(`/app/profile`)
    console.log('Hello world!')
  } catch(err) {
    console.error(`Error in getJwt(): `, err)
  }
}

export default Profile

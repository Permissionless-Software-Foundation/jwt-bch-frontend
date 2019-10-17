import React from "react"
import { getUser } from "../services/auth"
var QRCode = require('qrcode.react');

const Profile = () => {
  const userData = getUser()
  //console.log(`userData: ${JSON.stringify(userData,null,2)}`)

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {userData.username}</li>
        <li>JWT: {userData.jwt}</li>
      </ul>

      <QRCode value="http://facebook.github.io/react/" />
    </>
  )
}

export default Profile

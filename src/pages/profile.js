import React from 'react'
import Layout from '../components/layout'
var QRCode = require('qrcode.react');

import { getUser } from "../services/auth"

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bchAddr: '',
      credit: 0,
      apiToken: '',
      username: ''
    }
  }

  async componentDidMount() {
    const userData = await getUser()
    console.log(`userData: ${JSON.stringify(userData,null,2)}`)

    // this.data = userData

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
      username: userData.username
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

          <QRCode value={this.state.bchAddr} />
        </div>
      </Layout>
    )
  }

  round(num) {
    let tmp = num*100
    tmp = Math.round(tmp)
    tmp = tmp / 100
    return tmp
  }
}

/*


*/

export default Profile

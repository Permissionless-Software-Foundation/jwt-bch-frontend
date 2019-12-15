/*
  A simple login form.
*/

import React from 'react'
import styled from 'styled-components'
import { handleLogin, isLoggedIn, setUser } from "../services/auth";
import { Link, navigate } from "gatsby";

// const config = require("../../config")

// const SERVER = config.server;
// const SERVER = ``;
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

class LoginForm extends React.Component {

  constructor(props) {
    super(props)

    _this = this

    this.state = {
      message: "",
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <form >
        Email:<br />
        <input
        type="text"
        name="email"
        onChange={this.handleUpdate}
        onKeyDown={_this.handleKeyDown}/>
        <br />
        Password:<br />
        <input
        type="password"
        name="password"
        onChange={this.handleUpdate}
        onKeyDown={_this.handleKeyDown}/>
        <br></br>
        <StyledButton href="#" className="button special" id="createBtn"
        onClick={this.createClick}
        data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al">
          Create
        </StyledButton>
        <StyledButton href="#" className="button special" id="loginBtn"
        onClick={this.loginClick}
        data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al">
          Login
        </StyledButton>
        <br />
        <OutMsg>{this.state.message}</OutMsg>

      </form>

    )
  }

  async handleKeyDown(e) {
    if (e.key === 'Enter') {
      _this.loginClick(e)
    }
  }

  validateEmail(email)
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      return (false)
  }

  handleUpdate(event) {
    _this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async createClick(event) {
    event.preventDefault()
    const isEmail = _this.validateEmail(_this.state.email)
    if(!isEmail){
      _this.setState(prevState => ({
        message: 'Error:  Must be Email Format'
      }))
      return
    }
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            email: _this.state.email,
            password: _this.state.password
          }
        })
      }

      // console.log(`options.body: ${JSON.stringify(options.body,null,2)}`)

      const data = await fetch(`${SERVER}/users/`, options);
      const users = await data.json();
      console.log(`users: ${JSON.stringify(users, null, 2)}`);

      //console.log(`name: ${users.user.username}`)
      //console.log(`token: ${users.token}`)

      setUser({
        email:users.user.email,
        username: users.user.username,
        jwt: users.token,
        userdata: users
      })

      navigate(`/profile`)
    } catch (err) {
      // If something goes wrong with auth, return false.
      //return false;
      _this.setState(prevState => ({
        message: err.message
      }))
    }
  }

  async loginClick(event) {
    event.preventDefault()
    const isEmail = _this.validateEmail(_this.state.email)
    if(!isEmail){
      _this.setState(prevState => ({
        message: 'Error:  Must be Email Format'
      }))
      return
    }

    //_this.setState(prevState => ({
    //  message: "You clicked the Login button."
    //}))

    //console.log(`state: ${JSON.stringify(_this.state,null,2)}`)

    await handleLogin(_this.state)

    navigate(`/profile`)
  }

}

export default LoginForm

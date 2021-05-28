/*
  A simple login form.
*/

import React from 'react'
import styled from 'styled-components'
import { handleLogin, isLoggedIn, setUser } from '../services/auth'
import { Link, navigate } from 'gatsby'

import NOTIFICATION from '../lib/notification'
const Notification = new NOTIFICATION()

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
      inFetch: false,
      message: '',
      email: '',
      password: '',
    }
    this.Notification = Notification
  }

  render() {
    return (
      <form>
        Email:
        <br />
        <input
          type="text"
          name="email"
          onChange={this.handleUpdate}
          onKeyDown={_this.handleKeyDown}
        />
        <br />
        Password:
        <br />
        <input
          type="password"
          name="password"
          onChange={this.handleUpdate}
          onKeyDown={_this.handleKeyDown}
        />
        <br></br>
        {!_this.state.inFetch && (
          <>
            <StyledButton
              href="#"
              className="button special"
              id="createBtn"
              onClick={this.createClick}
              data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
            >
              Create
            </StyledButton>
            <StyledButton
              href="#"
              className="button special"
              id="loginBtn"
              onClick={this.loginClick}
              data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
            >
              Login
            </StyledButton>
          </>
        )}
        {_this.state.inFetch && (
          <img
            width="100"
            src="https://i.imgur.com/8n8PYAi.gif"
            alt="Loading..."
          ></img>
        )}
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

  validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  handleUpdate(event) {
    _this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async createClick(event) {
    try {
      event.preventDefault()
      // const isEmail = _this.validateEmail(_this.state.email)

      if (!_this.state.email) {
        _this.setState(prevState => ({
          message: 'Error:  Must be Email Format',
        }))

        _this.Notification.notify('Email', 'Must be Email Format', 'danger')

        return
      }
      _this.setState({
        inFetch: true,
      })
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: _this.state.email,
              password: _this.state.password,
            },
          }),
        }

        // console.log(`options.body: ${JSON.stringify(options.body,null,2)}`)

        const data = await fetch(`${SERVER}/users/`, options)
        const users = await data.json()
        console.log(`users: ${JSON.stringify(users, null, 2)}`)

        //console.log(`name: ${users.user.username}`)
        //console.log(`token: ${users.token}`)

        setUser({
          email: users.user.email,
          username: users.user.username,
          jwt: users.token,
          userdata: users,
        })

        _this.Notification.notify('LogIn', 'Success!!', 'success')
        _this.setState({
          inFetch: false,
        })
        setTimeout(() => {
          navigate(`/profile`)
        }, 1500)
      } catch (err) {
        // If something goes wrong with auth, return false.
        //return false;
        _this.setState(prevState => ({
          message: err.message,
        }))

        _this.Notification.notify('Error', err.message, 'danger')
      }
    } catch (err) {
      _this.Notification.notify('Error', err.message, 'danger')
    }
  }

  async loginClick(event) {
    try {
      event.preventDefault()
      // const isEmail = _this.validateEmail(_this.state.email)
      const isEmail = true
      if (!isEmail) {
        _this.setState(prevState => ({
          message: 'Error:  Must be Email Format',
        }))

        _this.Notification.notify('Email', 'Must be Email Format', 'danger')

        return
      }

      //_this.setState(prevState => ({
      //  message: "You clicked the Login button."
      //}))

      //console.log(`state: ${JSON.stringify(_this.state,null,2)}`)

      const handleSuccess = await handleLogin(_this.state)

      if (!handleSuccess) {
        _this.setState(prevState => ({
          message: 'Username or password does not match.',
        }))

        _this.Notification.notify(
          'Error',
          'Email or password does not match.',
          'danger'
        )
      } else {
        _this.Notification.notify('LogIn', 'Success!!', 'success')
        setTimeout(() => {
          navigate(`/profile`)
        }, 1500)
      }
    } catch (err) {
      _this.Notification.notify('Error', err.message, 'danger')
    }
  }
}

export default LoginForm

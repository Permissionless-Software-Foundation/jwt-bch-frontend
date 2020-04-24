import React from 'react'
import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'

import { getUser, isLoggedIn, logout } from '../services/auth'
import './nav-bar.css'
import Logo from '../assets/images/fullstackcash-Grey.png'
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <header id="nav" className="alt reveal">
        <nav>
          <img
            src={Logo}
            className="fullstack-logo" />
          <a
            className="menu-link"
            onClick={this.props.onToggleMenu}
            href="#!"
          >
          </a>
        </nav>
      </header>
    )
  }
}
Header.propTypes = {
  onToggleMenu: PropTypes.func,
}
export default Header

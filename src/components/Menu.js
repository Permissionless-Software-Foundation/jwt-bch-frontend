/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import { isLoggedIn, logout } from '../services/auth'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link onClick={props.onToggleMenu} to="/pricing">
            Pricing
          </Link>
        </li>

        <li>
          <Link onClick={props.onToggleMenu} to="/examples">
            Examples
          </Link>
        </li>

        <li>
          <Link onClick={props.onToggleMenu} to="/documentation">
            Documentation
          </Link>
        </li>

        <li>
          <Link onClick={props.onToggleMenu} to="/consulting">
            Consulting
          </Link>
        </li>

        <li>
          <Link onClick={props.onToggleMenu} to="/cashstrap">
            CashStrap
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/free-access">
            Free Access
          </Link>
        </li>

      </ul>

      <ul className="actions vertical">
        {isLoggedIn() ? (
          <Link
            className="button  fit"
            to="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className="button fit">
            Log In
          </Link>
        )}
      </ul>
    </div>

    <a className="close" onClick={props.onToggleMenu} href="#!">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu

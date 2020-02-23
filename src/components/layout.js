import React from 'react'
import '../assets/scss/main.scss'

//import Header from "./Header"
//import Footer from "./Footer"
import NavBar from './nav-bar'
import Menu from './Menu'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

class Template extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: 'is-loading',
      isMenuVisible: false,
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.ignoreWarningsLifeCycles()

  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }
  // Ignore Deprecated Warnings lyfe cicle  from dependencies
  ignoreWarningsLifeCycles() {
    console.warn = e => {
      const warnKeyToIgnore = 'deprecated lifecycles to their new names'
      if (!e.match(warnKeyToIgnore)) {
        console.error(`WARNING:${e}`)
      }
    }
  }

  render() {
    const { children } = this.props

    return (
      <>
        <ReactNotification />
        <div
          className={`body ${this.state.loading} ${
            this.state.isMenuVisible ? 'is-menu-visible' : ''
          }`}
        >
          <div id="wrapper">
            <NavBar onToggleMenu={this.handleToggleMenu} />
            {children}
          </div>
          <Menu onToggleMenu={this.handleToggleMenu} />
        </div>
      </>
    )
  }
}

export default Template

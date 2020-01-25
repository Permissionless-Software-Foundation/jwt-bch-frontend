import React from 'react'
import '../assets/scss/main.scss'

//import Header from "./Header"
//import Footer from "./Footer"
import NavBar from './nav-bar'
import Menu from './Menu'

class Template extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: 'is-loading',
      isMenuVisible: false,
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
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

  render() {
    const { children } = this.props

    return (
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
    )
  }
}

export default Template

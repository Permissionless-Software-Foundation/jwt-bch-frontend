import React from 'react'
import styled from 'styled-components'
import { updateUser } from '../services/users'
import { getUser } from '../services/auth'

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

let _this

class ChangePassword extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showButtom: true,
      oldPassword: '',
      firtsPassword: '',
      secondPassword: '',
      placeHolder: 'Enter Old Password',
      step: 1,
    }
    _this = this
  }

  render() {
    return (
      <StyledContent>
        {_this.state.showButtom ? (
          <button onClick={_this.hideButton}>Change Password</button>
        ) : (
          <div>
            <strong>{_this.state.placeHolder}</strong>
            <br></br>
            <input
              id="input_password"
              name="change_password"
              type="password"
              placeholder={_this.state.placeHolder}
              onBlur={_this.resetState}
              onKeyDown={_this.handleKeyDown}
            />
          </div>
        )}
      </StyledContent>
    )
  }

  async handleKeyDown(e) {
    const value = e.target.value

    // if user press esc, cancel edit
    if (e.key === 'Escape') {
      _this.resetState()
      return
    }

    // if user press enter
    if (e.key === 'Enter') {
      if (!value || value.length === 0) return
      switch (_this.state.step) {
        // For Old Password Input
        case 1:
          _this.setState({
            oldPassword: value,
            placeHolder: 'Enter New Password',
            step: _this.state.step + 1,
          })
          break

        // For New Password Input
        case 2:
          _this.setState({
            firtsPassword: value,
            placeHolder: 'Repeat New Password',
            step: _this.state.step + 1,
          })
          break

        // For Reapeat New Password Input
        case 3:
          _this.setState({
            secondPassword: value,
          })

          // Validate Password Match
          if (value !== _this.state.firtsPassword) {
            window.alert('ERROR: the passwords do not match')
            _this.resetState()
            return
          }
          // Proceed to change the password
          _this.changeRequest()
          break
      }

      // Reset input value
      const inputElement = document.getElementById('input_password')
      inputElement.value = ''
    }
  }
  // Reset default state
  async resetState() {
    _this.setState({
      showButtom: true,
      oldPassword: '',
      firtsPassword: '',
      secondPassword: '',
      placeHolder: 'Enter Old Password',
      step: 1,
    })
  }

  //Hide "change password" button
  async hideButton() {
    _this.setState({
      showButtom: false,
    })
    // Set focus on input
    setTimeout(() => {
      const inputElement = document.getElementById('input_password')
      inputElement.focus()
    }, 250)
  }

  // TODO: we can validate old password 
  // with the auth service for more security
  async changeRequest() {
    // try to update user data
    try {
      const user = getUser()
      // Model to update
      const userUpdated = {
        password: _this.state.firtsPassword,
        _id: user.userdata.user._id,
      }
      const updateResult = await updateUser(userUpdated)
      if(!updateResult) throw new Error('Error  Changing Password')
      window.alert('Password Changed Successfully.!')
    } catch (error) {
      window.alert('Error  Changing Password')
    }
  }
}
export default ChangePassword

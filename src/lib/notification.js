import React from 'react'
import { toast } from 'react-toastify'

let _this
class Notification extends React.Component {
  constructor (props) {
    super(props)
    _this = this
  }

  notify (title, msj, type, time) {
    const toastType = type === 'danger' ? 'error' : type === 'success' ? 'success' : 'info'

    toast[toastType](msj, {
      position: 'bottom-right',
      autoClose: time || 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
}
export default Notification

import 'isomorphic-fetch'
import { getUser } from './auth'

const SERVER = process.env.AUTHSERVER

// Detect if the app is running in a browser.
export const isBrowser = () => typeof window !== 'undefined'

// get all projects
export const getUsers = async () => {
  const token = getUser().jwt ? getUser().jwt : ''

  //try to get all projects
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const resp = await fetch(`${SERVER}/users`, options)
    if (resp.ok) {
      return resp.json()
    } else {
      return false
    }
  } catch (e) {
    console.log(e)
    return false
  }
}
// get  project by id
export const getUserById = async id => {
  const token = getUser().jwt ? getUser().jwt : ''

  //try to get all projects
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const resp = await fetch(`${SERVER}/users/${id}`, options)
    if (resp.ok) {
      return resp.json()
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export const updateUser = async user => {
  console.log(user)
    const token = getUser().jwt ? getUser().jwt : ''

    //try to get all projects
    try {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({user:user})
      }
      const resp = await fetch(`${SERVER}/users/${user._id}`, options)
      console.log(resp)
      if (resp.ok) {
        return resp.json()
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }

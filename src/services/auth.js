import 'isomorphic-fetch'

const SERVER = process.env.AUTHSERVER

// Detect if the app is running in a browser.
export const isBrowser = () => typeof window !== 'undefined'

// Get user data from localstorage
export const getUser = () =>
  isBrowser() && window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser'))
    : {}

// Save user data to localstorage
export const setUser = user =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const handleLogin = async ({ email, password }) => {
  // Try to authenticate.
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }
    const data = await fetch(`${SERVER}/auth/`, options)
    const users = await data.json()
    console.log(`users: ${JSON.stringify(users, null, 2)}`)

    // console.log(`name: ${users.user.username}`)
    // console.log(`token: ${users.token}`)

    setUser({
      username: users.user.username,
      jwt: users.token,
      userdata: users,
      email: users.user.email
    })

    return true
  } catch (err) {
    // If something goes wrong with auth, return false.
    return false
  }
}

// Return true if user is logged in. Otherwise false.
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const logout = callback => {
  setUser({})
  callback()
}

export const getExpirationDate = async () => {
  const userData = await getUser()
  const token = userData.userdata.token ? userData.userdata.token : ''

  // Try to get  metadata by id
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    const resp = await fetch(`${SERVER}/auth/expiration`, options)
    if (resp.ok) {
      return resp.json()
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token)
}

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const logout = () => {
  unsetAccessToken()
  unsetUser()
  unsetStorageAll()
  localStorage.setItem('logout', Date.now())
}

export const unsetAccessToken = () => {
  localStorage.removeItem('accessToken')
}

export const unsetUser = () => {
  localStorage.removeItem('user')
}

export const unsetStorageAll = () => {
  const tmpSports = localStorage.getItem('sports')
  const tmpAdministratorInformationIds = localStorage.getItem(
    'administratorInformationIds'
  )
  localStorage.clear()
  localStorage.setItem('sports', tmpSports)
  localStorage.setItem(
    'administratorInformationIds',
    tmpAdministratorInformationIds
  )
  sessionStorage.clear()
}

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.accessToken
}

export const getClientFromLocalStorage = () => {
  return localStorage.client
}

export const getUidFromLocalStorage = () => {
  return localStorage.uid
}

export const getExpiryFromLocalStorage = () => {
  return localStorage.expiry
}

export const getUserFromLocalStorage = () => {
  const json = localStorage.user
  return json ? JSON.parse(json) : undefined
}

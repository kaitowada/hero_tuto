// import { getAccessTokenFromLocalStorage } from '~/utils/auth'

export default function({ $axios }) {
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  console.log(localStorage.accessToken)
  const accessToken = localStorage.accessToken
  $axios.setToken(accessToken, 'Bearer')
}

// import { getAccessTokenFromLocalStorage } from '~/utils/auth'

export default function({ $axios }) {
  console.log('axios.js localStorage', localStorage.getItem('accessToken'))
  // const accessToken = localStorage.accessToken
  // $axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken
  $axios.setToken(localStorage.getItem('accessToken'), 'Bearer')
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  $axios.setHeader('Content-Type', 'application/json')
}

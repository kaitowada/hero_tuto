// import { getAccessTokenFromLocalStorage } from '~/utils/auth'

export default function({ $axios }) {
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  const accessToken =
    'rXHO3LUXsQWK7lPF3rWZHFkDPonJoOiewlqT7XtstcoliAtFZASa6FyfgGw5klNKZ1uuf5YaC5WzIKvH'
  $axios.setToken(accessToken, 'Bearer')
}

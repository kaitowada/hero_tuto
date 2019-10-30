import { getAccessTokenFromLocalStorage } from '~/utils/auth'

export default function({ $axios }) {
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')

  if (getAccessTokenFromLocalStorage()) {
    const accessToken =
      'ZPsHv4R3Ui3Ponb392Mxi8dGpcUlag6LVllwYcbCL865xbk2lbNFLXM3JaycFlqiWo4sHuQUl5n3nNxv'
    $axios.setToken('api_token', accessToken)
  }
}

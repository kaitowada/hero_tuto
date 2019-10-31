// import { getAccessTokenFromLocalStorage } from '~/utils/auth'

export default function({ $axios }) {
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  // const accessToken =
  //   'QhlcTITzbmaZO7cO4rLtbHWrlZ0GbMWcnT16s8gZH8KjsXovqVAdovqMw9AFW3JrOrWJv5UcVGlxSHMm'
  // $axios.setToken('Bearer', accessToken)
}

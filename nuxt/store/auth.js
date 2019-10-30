import {
  setAccessToken as utilSetAccessToken,
  setUser as utilSetUser,
  logout as utilLogout
} from '~/utils/auth'

export const state = () => ({
  user: {},
  apiToken: null,
  loginState: false
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    utilSetUser(user)
  },

  setAccessToken(state, apiToken) {
    state.apiToken = apiToken
    // this.$axios.setHeader('access-token', accessToken)
    utilSetAccessToken(apiToken)
  },
  setLoginState(state, loginStatus) {
    state.loginState = loginStatus
  },
  unsetAuthInfo(state) {
    state.user = null
    state.accessToken = null
    state.loginState = false
  }
}

export const actions = {
  // メールアドレスログイン
  async login({ dispatch, commit }, { data }) {
    try {
      const response = await this.$axios.$post(
        'http://localhost:4000/api/login',
        data
      )
      const user = {
        id: response.id,
        email: response.email
      }
      console.log('response', response)
      dispatch('setUser', user)
      dispatch('setAccessToken', response.api_token)
      dispatch('setLoginState', true)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  logout({ commit }, isReload = true) {
    utilLogout()
    commit('unsetAuthInfo')
    if (isReload) location.reload()
  },
  setUser({ commit }, user) {
    commit('setUser', user)
  },
  setAccessToken({ commit }, token) {
    commit('setAccessToken', token)
  },
  setLoginState({ commit }, statu) {
    commit('setLoginState', statu)
  }
}

export const getters = {
  getLoginState(state) {
    console.log('loginstate', state.loginState)
    return state.loginState
  }
}

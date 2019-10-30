export const state = () => ({
  hero: {},
  heroList: []
})

export const mutations = {
  setHeroList(state, heroList) {
    state.heroList = heroList
  }
}

export const actions = {
  async heroList({ dispatch }) {
    try {
      const response = await this.$axios.$get('http://localhost:4000/api/hero')
      console.log('response', response)
      dispatch('setHeroList', response)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  setHeroList({ commit }, heroList) {
    commit(heroList)
  }
}

export const getters = {
  getHeroList(state) {
    return state.heroList
  }
}

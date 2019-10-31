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
  async heroList({ commit }) {
    await this.$axios
      .$get('http://localhost:4000/api/hero')
      .then((response) => {
        console.log('heroList', response)
        commit('setHeroList', response)
        // return response
      })
  },

  async newHero({ dispatch, commit }, { data }) {
    console.log('data', data)
    await this.$axios.$post('http://localhost:4000/api/hero/new', data)
  }
}

export const getters = {
  heroList(state) {
    console.log('state.heroList', state.heroList)
    return state.heroList
  }
}

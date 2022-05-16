import { createStore } from 'vuex'

export default createStore({
  state: {
    totalLoads:0
  },
  getters: {
    getTotalLoads: (state)=>state.totalLoads.toFixed(0)
  },
  mutations: {
    updateLoads(state, loads:number){
      state.totalLoads += loads
    },
    resetLoads(state) {
      state.totalLoads = 0
    }

  },
  actions: {
    updateLoads({commit}){
      commit('updateLoads')
    },
    resetLoads({commit}){
      commit('resetLoads')
    }

  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shown: false,
    mini: false
  },
  getters: {
    drawerState: state => { return state.shown },
    drawerMini: state => { return state.mini }
  },
  mutations: {
    TOGGLE_DRAWER_STATE (state, newState = null) { state.shown = newState!=null?newState:!state.shown },
    TOGGLE_DRAWER_MINI (state, newState = null) { state.mini = newState!=null?newState:!state.mini }
  },
  actions: {
    toggleDrawerState (context, newState = null) { context.commit('TOGGLE_DRAWER_STATE', newState) },
    toggleDrawerMini (context, newState = null) { context.commit('TOGGLE_DRAWER_MINI', newState) }
  }
})

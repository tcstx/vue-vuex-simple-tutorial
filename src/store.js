import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    _isTrue: true
  },
  getters: {
    isTrue: function(state){
      return state._isTrue;
    }
  },
  mutations: {
    toggle: function(state) {
      state._isTrue = !state._isTrue;
    }
  },
  actions: {
    toggle: function(context) {
      context.commit('toggle');
    }
  }
});

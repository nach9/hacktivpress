import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const $http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  articles: []
}

const mutations = {
  getArticles (state, payload) {
    state.articles = payload
  }
}

const actions = {
  getAllData ({ commit }) {
    console.log('tarik data store')
    $http.get('/articles')
    .then(({data}) => {
      commit('getArticles', data)
    })
  }

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

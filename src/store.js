import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API } from '@/utils/constants.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      img: ''
    },
    images: [],
    loaded: {
      user: false,
      images: false
    }
  },
  mutations: {
    saveUser(state, { user }) {
      state.user = {...user};
    },
    saveImages(state, { images }) {
      state.images = [...images];
    },
    changeStatus(state, { value }) {
      state.loaded = {...state.loaded, ...value};
    }
  },
  actions: {
    loadUser({ state, commit }) {
      if (state.loaded.user === true) return;

      axios.get(API.user)
        .then(response => {
          commit({
            type: 'saveUser',
            user: response.data
          });
          commit({
            type: 'changeStatus',
            value: {
              user: true
            }
          })
        })
    },
    loadImages({ state, commit }) {
      if (state.loaded.images === true) return;

      axios.get(API.images)
        .then(response => {
          commit({
            type: 'saveImages',
            images: response.data
          });
          commit({
            type: 'changeStatus',
            value: {
              images: true
            }
          })
        })
    }
  }
})

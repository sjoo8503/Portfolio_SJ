import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentView: "home-view", // data
    };
  },

  mutations: {
    changeView(state, payload) {
      state.currentView = payload; // methods
      console.log(state.currentView);
    },
  },

  getters: {
    currentView(state) {
      return state.currentView; // computer property
    },
  },
});

export default store;

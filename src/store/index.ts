import { createStore } from "vuex";
import track from "./track-store";
import genre from "./genre-store";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    genre: genre,
    track: track
  }
});

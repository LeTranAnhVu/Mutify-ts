import {Module} from "vuex";

interface GenreState {
    genres: string[]
}

interface GenreGetters {
    getGenres: string[]
}
const genre: Module<GenreState, any> = {
    state: () => ({
        genres: [],
    }),
    mutations: {
       SET_GENRES: (state) => {
           state.genres = ['rock', 'R&B']
       }
    },

    getters: {
        getGenres: (state) => {
            return state.genres
        },
    },
    actions: {}

}



export default genre
import {createStore} from "vuex";

export const storeConfig = createStore({
    state() {
        token: ''
    },
    mutations: {
        setToken(state, data) {
            state.token = data
        }
    }
})
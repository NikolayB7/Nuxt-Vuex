
export const state = () => ({
    users: []
})

export const mutations = {
    SET_USERS(state, users) {
        state.users = users
    }
}


export const actions = {
    async fetch({ commit }) {
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', users)
    }
}

export const getters = {
    USERS: s => s.users
}
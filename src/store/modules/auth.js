import api from '../../api/imgur';


const state = {
    token: null
};


const getters = {
    isLoggedIn: (state) => {
        if(state.token){
            return true;
        }
        else{
            return false;
        }
    }
};


const actions = {

    login: () => {
        api.login();
    },

    logout: ({commit}) => {
        commit('setToken',null);
    }
};


const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};



export default {
    state,
    getters,
    actions,
    mutations
};
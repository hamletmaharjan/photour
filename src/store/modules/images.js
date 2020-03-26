import api from '../../api/imgur';

const state = {
    images: []
};


const getters = {
    allImages: state => state.images
};


const actions = {
    async fetchImages({ rootState, commit }) {
        const token = rootState.auth.token;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },

    async uploadImages({ rootState },images){
        var token = rootState.auth.token;
        console.log(images);
        console.log(token);
    }
};


const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};



export default {
    state,
    getters,
    actions,
    mutations
}
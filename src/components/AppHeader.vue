<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">Photour</router-link>

        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="item">Galleries</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <a class="item" v-on:click="logout">Logout</a>

            </div>
            <a v-else href="#" class="ui item" v-on:click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login', 'logout'])
}
</script>


<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
}
</style>
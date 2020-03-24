<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">Photour</a>

        <div class="right menu">
            <a href="#" class="ui item" v-on:click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AppHeader',
    methods: mapActions(['login'])
}
</script>
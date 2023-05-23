<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
    components: {
        Header,
        Main,
    },
    created() {
        // chiamata all'api e assegnamo il result allo store
    }
}
</script>

<template>
    <div class="container-fluid">
        <Header />
        <Main />
    </div>
</template>

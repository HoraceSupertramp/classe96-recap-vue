<script>
import store from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header class="d-flex px-2 mt-4 align-items-center justify-content-between">
        <h1>Menu</h1>
        <select v-model="store.filter.value" class="form-select">
            <option
                v-for="option in store.filter.options"
                :value="option"
            >{{ option }}</option>
        </select>
    </header>
</template>

<style scoped>
    header select {
        max-width: 200px;
    }
</style>
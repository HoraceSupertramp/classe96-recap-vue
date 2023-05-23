<script>
export default {
    props: {
        filterValue: String,
        filterOptions: Array,
    }
}
</script>

<template>
    <header class="d-flex px-2 mt-4 align-items-center justify-content-between">
        <h1>Menu</h1>
        <select :value="filterValue" @change="$emit('filter', $event.target.value)" class="form-select">
            <option
                v-for="option in filterOptions"
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
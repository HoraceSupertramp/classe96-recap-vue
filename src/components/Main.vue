<script>
import Card from './Card.vue';
import store from '../store';

export default {
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        filtered() {
            return this.store.menu.items.filter((item) => {
                return (
                    this.store.filter.value === 'Tutte' ||
                    item.vegetarian
                );
            })
        }
    }
}
</script>

<template>
    <main>
        <ul class="row row-cols-md-2 row-cols-lg-3 row-cols-1 g-4">
            <li v-for="item in filtered" :key="item.name">
                <Card
                    :name="item.name"
                    :description="item.description"
                    :price="item.price"
                    :image="item.image"
                    :vegetarian="item.vegetarian"
                />
            </li>
        </ul>
    </main>
</template>

<style scoped>
    main ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
</style>
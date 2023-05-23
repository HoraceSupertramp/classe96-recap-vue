<script>
import Card from './components/PizzaCard.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            filter: {
                value: 'Tutte',
                options: [
                    'Tutte',
                    'Vegetariane',
                ]
            },
            menu: {
                items: [
                    {
                        name: 'Margherita',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'margherita.jpeg',
                        price: '6,00€',
                        vegetarian: true,
                    },
                    {
                        name: 'Capricciosa',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'capricciosa.webp',
                        price: '9,00€',
                        vegetarian: false,
                    },
                    {
                        name: 'Diavola',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'diavola.jpeg',
                        price: '10,00€',
                        vegetarian: false,
                    },
                    {
                        name: 'Vegetariana',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'vegetariana.jpeg',
                        price: '8,00€',
                        vegetarian: true,
                    },
                    {
                        name: 'Ananas',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'ananas.png',
                        price: '11,00€',
                        vegetarian: true,
                    }
                ]
            }
        }
    },
    computed: {
        filtered() {
            return this.menu.items.filter((item) => {
                return (
                    this.filter.value === 'Tutte' ||
                    item.vegetarian
                );
            })
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <header class="d-flex px-2 mt-4 align-items-center justify-content-between">
            <h1>Menu</h1>
            <select v-model="filter.value" class="form-select">
                <option
                    v-for="option in filter.options"
                    :value="option"
                >{{ option }}</option>
            </select>
        </header>
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
    </div>
</template>

<style scoped>
    header select {
        max-width: 200px;
    }
    main ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
</style>
<script>
import Card from './components/Card.vue';
export default {
    components: {
        Card,
    },
    data() {
        return {
            menu: {
                items: [
                    {
                        name: 'Margherita',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'margherita.jpeg',
                        price: '6,00€'
                    },
                    {
                        name: 'Capricciosa',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'capricciosa.webp',
                        price: '9,00€'
                    },
                    {
                        name: 'Diavola',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'diavola.jpeg',
                        price: '10,00€'
                    },
                    {
                        name: 'Vegetariana',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'vegetariana.jpeg',
                        price: '8,00€'
                    },
                    {
                        name: 'Ananas',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit rhoncus turpis ac tincidunt.',
                        image: 'ananas.png',
                        price: '11,00€'
                    }
                ]
            }
        }
    },
}
</script>

<template>
    <header>
        <h1>Menu</h1>
        <button>Checkout</button>
    </header>
    <main>
        <ul class="menu">
            <li v-for="(pizza, index) in menu.items" :key="index">
                <Card
                    :pippo="pizza.name"
                    :description="pizza.description"
                    :price="pizza.price"
                    :image="pizza.image"
                />
            </li>
        </ul>
  </main>
</template>

<style lang="scss" scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    main {
        .menu {
            display: flex;
            flex-flow: row wrap;
            gap: 1.5em;

            li {
                flex: 0 0 auto;
                width: calc((100% - ( 1.5em * 2)) / 3);                
            }
        }
    }
</style>

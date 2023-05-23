<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
    components: {
        Header,
        Main,
    },
    data() {
        return {
            filterValue: 'Tutte',
            filterOptions: [
                'Tutte',
                'Vegetariane',
            ],
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
        items() {
            return this.menu.items.filter((item) => {
                return (
                    this.filterValue === 'Tutte' ||
                    item.vegetarian
                );
            });
        }
    },
    methods: {
        onFilter(pippo) {
            this.filterValue = pippo;
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <Header
            :filterValue="filterValue"
            :filterOptions="filterOptions"
            @pippo="onFilter"
        />
        <Main :items="items"/>
    </div>
</template>

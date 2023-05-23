import { reactive } from 'vue';

export default reactive({
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
});
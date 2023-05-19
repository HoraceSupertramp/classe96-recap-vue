<script>
export default {
    props: {
        id: String,
        name: String,
        description: String,
        price: String,
        image: String,
    },
    methods: {
        getImagePath: function(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="pizza">
        <img :src="getImagePath(image)">
        <div class="info">
            <h2 class="name">{{ name }}</h2>
            <div class="description">{{ description }}</div>
            <div class="footer">
                <h3 class="price">{{ price }}</h3>
                <div class="add-to-cart">
                    <button>Order</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .pizza {
        display: flex;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .2);

        img {
            overflow: hidden;
            flex: 1 1 30%;
            object-fit: cover;
        }

        .info {
            flex: 1 1 70%;
            text-align: left;
            padding: .8em 1.2em;
            border: 1px solid #ededed;
            border-width: 1px 1px 1px 0;
            border-radius: 0 8px 8px 0;
        }

        .footer {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
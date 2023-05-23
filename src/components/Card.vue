<script>
export default {
    props: {
        name: String,
        description: String,
        price: String,
        image: String,
        vegetarian: Boolean,
    },
    methods: {
        getImagePath: function(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="main">
        <div class="h-sm-100 row">
            <img class="h-sm-100 col-md-4 p-0" :src="getImagePath(image)">
            <div class="h-100 col-md-8 info">
                <div class="mb-2 d-flex align-items-center justify-content-between">
                    <h2 class="name m-0">
                        {{ name }}
                    </h2>
                    <div class="icon">
                        <font-awesome-icon v-if="vegetarian" :icon="['fas', 'leaf']" />
                    </div>
                </div>
                <div class="body mb-2">{{ description }}</div>
                <div class="footer d-flex align-items-center justify-content-between">
                    <h3 class="mb-0">{{ price }}</h3>
                    <div class="add-to-cart">
                        <button class="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/media.scss';

    .main {
        height: 100%;
        background: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .2);

        img {
            overflow: hidden;
            object-fit: cover;

            @media (max-width: media.$tablet) {
                height: 200px;
            }
        }
        
    }

    .info {
        padding: 1em 1.4em;
        border: 1px solid #ededed;
        border-width: 1px 1px 1px 0;
        border-radius: 0 8px 8px 0;
    }

    .add-to-cart {
        margin-left: 1em;
    }
</style>
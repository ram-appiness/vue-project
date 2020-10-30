<template>
    <div class="d-flex row container mx-auto" v-if='products.length'>
        <section v-for="product in products" :key="product.id" class="m-3 card-box px-0">
            <img :src="product.image" class="img-card">
            <div class="pt-3">
                <strong>{{product.name}} : </strong>
                <strong v-if ="!fromCart"> $ {{product.price}}</strong>
                <strong v-else> $ {{product.price*product.needCount}}</strong>
                <div class="d-flex justify-content-center my-2" v-if='fromCart'>
                    <button class="btn btn-danger" @click="reduceCount(product)">-</button>
                    <p class="my-auto mx-2">{{product.needCount}}</p>
                    <button class="btn btn-primary" @click='increaseCount(product.id)'>+</button>
                </div>
                <div class="d-flex justify-content-around py-4">
                    <button class="btn btn-success" @click="noAction">Buy Now</button>
                    <button class="btn btn-primary" v-if="!product.inCart" @click="modifyCart(product.id)">Add to Cart</button>
                    <button class="btn btn-primary" v-else @click="modifyCart(product.id)">Remove from Cart</button>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <p>No items are in cart</p>
    </div>
</template>

<script>
    export default {
        props: {
            fromCart: {
                type:Boolean,
                required: false,
                default:false
            }
        },
        methods: {
            modifyCart(id) {
                console.log(id)
                this.$store.dispatch('cartModifyAction',id)
            },
            reduceCount(product) {
                if(product.needCount > 1) {
                    this.$store.dispatch('decreaseNeedCountAction',product.id)
                } 
            },
            increaseCount(id) {
                this.$store.dispatch('increaseNeedCountAction',id)
            },
            noAction() {
                alert("no action provied for the button")
            }
        },
        computed : {
            products () {
                if(this.fromCart) {
                    return this.$store.getters.getProductsCart;
                }
                else {
                    return this.$store.getters.getProducts
                }
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 250px;
        position: relative;
        border-radius: 5px 5px 0 0;
    }
    .card-box {
        width: 330px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .img-card {
        margin-bottom: 5px;
        box-shadow:  0 0px 20px rgba(0,0,0,0.19), 0 1px 6px rgba(0,0,0,0.23)
    }
</style>
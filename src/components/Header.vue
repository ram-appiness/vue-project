<template>
    <section class="bg-success p-4 text-white d-flex justify-content-between">
        <router-link to="/"><h2 class="text-white">Shopping website</h2></router-link>
        <section class="d-flex">
            <router-link to="/add-product"><button class="btn btn-primary mr-5">Add product to Publish</button></router-link>
            <router-link to="/cart">
                <img src="../assets/shopping-cart.svg">
                <span class="badge badge-warning bg-white" style="height:16px;margin-left:-7px">{{items}}</span>
            </router-link>
        </section>
    </section>
</template>


<script>
export default {
    computed: {
        items() {
            return this.$store.getters.getProducts.filter( item => item.inCart).length
        }
    }
}
</script>

<style scoped>
    img {
        height: 40px;
        widows: 40px;
    }
</style>
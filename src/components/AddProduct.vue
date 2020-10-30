<template>
    <form @submit.prevent="addProduct">
        <div class="container">
            <section class="my-3">
                <label for="name" :class="{invalid:nameInvalid}">Product name:</label>
                <input type="text" id="name" @blur="checkProduct()" :class='["form-control",{invalid:nameInvalid}]' v-model.trim="productName">
            </section>
            <section class="my-3">
                <label for="price"  :class='{invalid:priceInvalid}'>Price:</label>
                <input type="text" id="price" @blur="checkPrice()" :class='["form-control",{invalid:priceInvalid}]' v-model.number="price">
            </section>
            <section class="my-3">
                <label @click="toOpenFile">Upload Image</label>
                <input type="file" ref="fileButton" @change="uploadImage">
            </section>
        </div>
        <button class="mt-3 btn btn-success">Submit</button>
    </form>
    <img v-if='image' :src="image">
</template>
<script>
export default {
    data() {
        return {
            productName:'',
            price:null,
            image: null,
            nameInvalid:false,
            priceInvalid:false,
        }
    },
    methods: {
        toOpenFile() {
            this.$refs.fileButton.click();
        },
        checkProduct() {
            if (this.productName.length < 1) {
                this.nameInvalid = true;
            }
            else {
                this.nameInvalid = false;
            }
        },
        checkPrice() {
            if (this.price === null || this.price < 0) {
                this.priceInvalid = true;
            }
            else {
                this.priceInvalid = false;
            }
        },
        uploadImage(event) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.image = e.target.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },
        addProduct() {
            if (!this.priceInvalid && !this.priceInvalid) {
                this.$store.dispatch('addProductAction',{
                id:this.productName,
                name:this.productName,
                image:this.image,
                inCart:false,
                price:this.price,
                needCount:0})
            }
            else {
                alert("form is invalid please check inputs")
            }
            this.$router.replace('/')
        }
    },
    watch: {
        productName(value) {
            if (value.length < 1) {
                this.nameInvalid = true
            }
            else {
                this.nameInvalid = false;
            }
        },
        price: function(value) {
            console.log(value)
            if (value.length < 1) {
                this.nameInvalid = true;
            }
            else {
                this.nameInvalid = false;
            }
        }
    }
}
</script>

<style scoped>
    .invalid {
        color: red;
        border-color: red;
    }
    img {
        margin: 30px;
        height: 250px;
        width: 400px;
    }
</style>
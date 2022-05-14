const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeItem(id) {
            const index = this.cart.indexOf(id);
            this.cart.splice(index,1);
        }
    },


})

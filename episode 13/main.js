window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}
// window.Event = new Vue(); // use .$emit and $on

Vue.component('coupon', {
    'template': `
        <div>
            <input placeholder="Enter your coupon code" v-on:blur="onCouponApplied" v-model="coupon">
        </div>
    `,
    data() {
        return {
            coupon: ''
        }
    },
    methods: {
        onCouponApplied() {
            // Event.$emit('coupon-was-applied', this.coupon);
            Event.fire('coupon-was-applied', this.coupon);
            console.log('it was applied - message comming from coupon component');

        }
    }
});

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    created() {
        // Event.$on('coupon-was-applied', () => {
        Event.listen('coupon-was-applied', () => {
            this.couponApplied = true;
            //console.log('event handled - message comming from vue root instance');
        })
    }
});
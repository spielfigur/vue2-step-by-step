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
            this.$emit('coupon-was-applied', this.coupon);
            console.log('it was applied - message comming from coupon component');
        }
    }
});

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true;
            console.log('it was applied - message comming from vue');
        }
    }
});
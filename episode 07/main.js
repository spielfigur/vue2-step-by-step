Vue.component('task', {
    template: '<li><slot></slot>: {{ message }}</li>',
    data() {
        return {
            message: 'Foobar'
        }
    }
});

new Vue({
    el: '#root'
});
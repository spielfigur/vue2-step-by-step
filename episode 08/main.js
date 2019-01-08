Vue.component('task-list', {
    template: '<div><ul><task v-for="task in tasks" v-bind:key="task.description" v-text="task.description"></task></ul></div>',
    data() {
        return {
                tasks: [{
                        description: 'Go to the Store',
                        completed: true
                    },
                    {
                        description: 'Buy some keyboards',
                        completed: false
                    },
                    {
                        description: 'Check the new windows server 2019',
                        completed: false
                    },
                    {
                        description: 'Clear inbox',
                        completed: false
                    },
                    {
                        description: 'Make dinner',
                        completed: false
                    },
                    {
                        description: 'Clean my room',
                        completed: true
                    }
                ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
    data() {
        return {

        }
    }
});

new Vue({
    el: '#root'
});
Vue.component('tabs', {
    'template': `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" v-bind:class="{ 'is-active': tab.isActive }">
                        <a v-bind:href="tab.href" @click="selectTab(tab)">
                            {{ tab.name }}
                        </a>
                    </li >
                </ul>
            </div>
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: [],
            selected: false
        };
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },
    created() {
        this.tabs = this.$children;
    },
    mounted() {
        console.log(this.$children);
    }
});

Vue.component('tab', {
    'template': `
        <div v-show="isActive"><slot></slot></div>
    `,
    'props': {
        name: { required: true },
        selected: { default: false }
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        } 
    },
    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root',
    data: {

    }
});
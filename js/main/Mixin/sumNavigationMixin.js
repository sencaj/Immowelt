import store from './../Store/store.js';
import router from './../Routing/routing.js';

export default {
    computed: {
        IsActive: function () {
            return (store.state.additionalData.CurrentDetailRoute === this.routename);
        }
    },
    methods: {
        mixin_summaryClick: function (isAdresseSummaryClick) {
            router.push({ name: this.routename, params: { save: true } });
        }
    }
}
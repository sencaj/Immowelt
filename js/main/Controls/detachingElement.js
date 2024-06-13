import Vue from 'vue';
import store from '../Store/store.js';

export default Vue.component('detaching_element', {
    template: '\
    <div ref="el" v-bind:class="[detached?(isActive?afterClass:\'\'):reattached?(isActive?reattachClass:\'\'):(isActive?beforeClass:\'\')]">\
        <slot></slot>\
    </div>',
    props: ['detachAtY', 'beforeClass', 'afterClass', 'enableSizeS', 'reattach', 'reattachClass', 'refContentBox', 'reattachTolerance'],
    data: function () {
        return {
            detached: false,
            reattached: false,
            marginTopReatach: 0,
            scrollY: 0
        };
    },
    computed: {
        isActive: function () {
            /*return (store.state.additionalData.DisplaySize !== 'S' && this.enableSizeS != 'true') ||
                (store.state.additionalData.DisplaySize === 'S' && this.enableSizeS == 'true');*/
            return true;
        },
        reattachContentBox: function () {
            return this.$parent.$refs[this.refContentBox];
        }
    },
    methods: {
        onScrollDetachElement: function () {
            if (this.detachAtY <= this.scrollY) {
                this.detached = true;
                this.marginTopReatach = this.$refs.el.getBoundingClientRect().top || this.$refs.el.getBoundingClientRect().y;
            } else {
                this.detached = false;
            }
        },
        windowScrollEventCallback: function () {
            if (!this.isActive)
                return;
            this.scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.reattach == 'true') {
                var bodyY = document.body.getBoundingClientRect().y || document.body.getBoundingClientRect().top;
                var boxDistanceY = Math.abs(bodyY - (this.reattachContentBox.getBoundingClientRect().y ||
                    this.reattachContentBox.getBoundingClientRect().top));
                var elementOffsetTopHeight = this.$refs.el.offsetHeight + this.marginTopReatach;
                var reattachY = boxDistanceY + this.reattachContentBox.offsetHeight - elementOffsetTopHeight +
                    (this.reattachTolerance ? Number(this.reattachTolerance) : 0);
                if (reattachY < this.scrollY) {
                    this.reattached = true;
                    this.$refs.el.style.top = reattachY + this.marginTopReatach + 'px';
                    this.detached = false;
                } else {
                    this.onScrollDetachElement();
                    this.$refs.el.style.top = '';
                    this.reattached = false;
                }
            } else {
                this.onScrollDetachElement();
            }
        }
    },
    created: function () {
        window.addEventListener('scroll', this.windowScrollEventCallback);
        window.addEventListener('resize', this.windowScrollEventCallback);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.windowScrollEventCallback);
        window.removeEventListener('resize', this.windowScrollEventCallback);
    }
});
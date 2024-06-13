import Vue from 'vue';

export default Vue.component('test_component', {
    template: `
    <div>
        <div>
            <h1><span v-html="foo"></span> Component</h1>
        </div>
    </div>
    `,
    data: function () {
        return {
            foo: 'Test'
        }
    } 
});
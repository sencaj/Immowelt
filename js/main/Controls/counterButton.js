import Vue from 'vue';

export default Vue.component('counterbutton_component', {
    template: '#counterbutton_template',
    props: ['value', 'max', 'min', 'step', 'dataAutotest', 'dataAutotestMinus', 'dataAutotestPlus', 'placeholder'],
    data: function () {
        return {
            replaceWithList: {},
            withReplaceList: {},
            stepSize: this.step ? this.step : 1,
            inputText: null
        }
    },
    mounted: function () {
        this.makeWordReplacementList();
        this.inputText = this.getReplacementValue();
    },
    watch: {
        value: function (newValue, oldValue) {
            if (isNaN(newValue)) {
                this.$emit('input', null);
                return;
            };
            var newInputValue = this.getReplacementValue();
            this.inputText = newInputValue;
        }
    },
    methods: {
        // Wert auf grenzen prüfen und emitten
        emitValueWithinBoundaries: function (newValue) {
            if ((newValue >= parseFloat(this.min) || this.min == undefined) &&
                (newValue <= parseFloat(this.max) || this.max == undefined)) {
                this.$emit('input', this.roundValueToStepSize(newValue));
                return true;
            }
            return false;
        },
        roundValueToStepSize: function (newValue) {
            return Math.round(newValue / this.stepSize) * this.stepSize;
        },
        getValueOrDefault: function () {
            return this.value !== '' ? this.value : (this.min ? parseFloat(this.min) : 0);
        },
        countValueDown: function () {
            var value = this.getValueOrDefault();
            if (this.value === '') {
                this.emitValueWithinBoundaries(value);
            } else {
                this.emitValueWithinBoundaries(value - parseFloat(this.stepSize));
            }
        },
        countValueUp: function () {
            var value = this.getValueOrDefault();
            if (this.value === '') {
                this.emitValueWithinBoundaries(value);
            } else {
                this.emitValueWithinBoundaries(value + parseFloat(this.stepSize));
            }
        },
        // Callback des on-change events des inputs
        onUpdateInputEvent: function (inputElement) {
            var newValue = this.getValueFromReplacement();
            if (!this.emitValueWithinBoundaries(newValue)) {
                this.inputText = null;
                this.$emit('input', null);
            }
        },
        // Gibt den value als alphanumerischen wert zurück
        getReplacementValue: function () {
            if (this.value == null)
                return '';
            var value = this.value.toString().replace(".", ",");
            if (this.replaceWithList.hasOwnProperty(value)) {
                var newValue = this.replaceWithList[value];
                return newValue;
            }
            return value;
        },
        // Gibt den input als numerischen wert zurück
        getValueFromReplacement: function () {
            if (this.replaceWithList.hasOwnProperty(this.inputText)) {
                var numeric = this.inputText;
                this.inputText = this.replaceWithList[this.inputText];
                return numeric;
            } else if (this.withReplaceList.hasOwnProperty(this.inputText.toString().toLowerCase())) {
                return this.withReplaceList[this.inputText.toLowerCase()];
            }
            return parseFloat(this.inputText.replace(",", "."));
        },
        // Macht zwei listen aus den replacements
        makeWordReplacementList: function () {
            var replacements = this.$vnode.componentOptions.children;
            if (replacements) {
                replacements = replacements.filter(function (obj) {
                    return obj.tag == 'replacement';
                });

                for (var i = 0; i < replacements.length; i++) {
                    var replacement = replacements[i];
                    var attrs = replacement.data.attrs;
                    this.replaceWithList[attrs.replace] = attrs.with;
                    this.withReplaceList[attrs.with.toLowerCase()] = parseFloat(attrs.replace);
                }
            }
        }
    }
});
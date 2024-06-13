import Vue from 'vue'
import store from '../../store/store'

export default Vue.component('clickrate_component', {
    template: `
    <div>
        <div class="grid_12o12" v-bind:class="isPDF">
            <h3>Klickrate</h3>
        </div>
        <div class="grid_09o12_l grid_09o12_m grid_12o12_s" v-bind:class="isPDF">
            <highcharts id="klickrate" :options="chart" :updateArgs="[true, false]" style="width:100%; height:400px;"></highcharts>
        </div>
    </div>
    `,
    data () {
        return {
            mounted: false,
            chartOptions: {
                credits: { enabled: false },
                chart: { type: 'line' },
                title: { text: '' },
                xAxis: [{
                    categories: [],
                    crosshair: true
                }],
                yAxis: [{
                    title: { text: '' },
                    min: 0,
                    labels: { format: '{value} %' }
                },{
                    title: { text: 'Mein aktiver Objektbestand' },
                    opposite: true,
                    allowDecimals: false
                }],
                tooltip: { shared: true },
                colors: ['#ffb200'],
                series: [{
                    name: 'Klickrate',
                    type: 'spline',
                    data: [],
                }]
            }
        }
    },
    computed: {
        isPDF() {
            return { 'offset_01_l': store.state.clickrate.isPDFVersion }
        },
        chart() {
            const chart = this.chartOptions
            const cr = store.state.clickrate
            chart.xAxis[0].categories = this.mounted ? cr.XAxisDates : []
            chart.series[0].data = this.mounted ? cr.ClickRates : []
            return chart 
        }
    },
    mounted() {
        this.mounted = true
    }
}); 
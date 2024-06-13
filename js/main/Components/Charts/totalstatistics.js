import Vue from 'vue'
import store from '../../store/store'

export default Vue.component('totalstatistics_component', {
template: `
    <div>
        <div class="grid_12o12_l grid_09o12_m grid_12o12_s" v-bind:class="isPDF">
            <highcharts id="gesamtSt" :options="chart" :updateArgs="[true, false]" style="width:100%;" ref="totalstatistics"></highcharts>
        </div>
    </div>
    `,
    data () {
        return {
            mounted: false,
            chartOptions: {
                credits: { enabled: false },
                chart: { zoomType: 'xy' },
                title: { text: '' },
                xAxis: [{
                    categories: [],
                    crosshair: true
                }],
                yAxis: [{
                    title: { text: 'Exposéaufrufe' },
                    min: 0,
                }, {
                    opposite: true,
                    allowDecimals: false,
                    title: { text: 'Kontakte gesamt' },
                    min: 0,
                }],
                tooltip: { shared: true },
                colors: ['#cccccc', '#ffb200', '#004dff', '#e65100'],
                series: [
                    {
                        name: 'Mein aktiver Objektbestand',
                        type: 'column',
                        yAxis: 1,
                        data: []
                    },
                    {
                        name: 'Kontakte gesamt',
                        type: 'spline',
                        data: []
                    }
                ]
            }
        }
    },
    computed: {
        isPDF() {
            return { 'offset_01_l kontaktePadding': store.state.exposevisit.isPDFVersion }
        },
        chart() {
            const chart = this.chartOptions
            const mpc = store.state.totalstatistics

            chart.series[0].data = this.mounted ? mpc.data1 : [] 
            chart.series[1].data = this.mounted ? mpc.data2 : [] 
            return chart 
        }
    },
    mounted() {
        this.mounted = true
    }
});
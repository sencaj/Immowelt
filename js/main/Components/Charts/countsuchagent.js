import Vue from 'vue'
import store from '../../store/store'

export default Vue.component('countsuchagent_component', {
template: `
    <div>
        <div class="grid_12o12" v-bind:class="isPDF">
            <h3>Im Suchauftrag</h3>
        </div>

        <div class="grid_09o12_l grid_09o12_m grid_12o12_s" v-bind:class="isPDF">
            <highcharts id="imSuchagent" :options="chart" :updateArgs="[true, false]" style="width:100%;" ref="highcharts"></highcharts>
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
                    title: { text: '' },
                    min: 0,
                    allowDecimals: false
                },{
                    title: { text: 'Mein aktiver Objektbestand' },
                    opposite: true,
                    allowDecimals: false
                }],
                tooltip: { shared: true },
                colors: ['#cccccc', '#ffb200'],
                series: [{
                    name: 'Mein aktiver Objektbestand',
                    type: 'column',
                    yAxis: 1,
                    data: [],
                    visible: true,
                    showInLegend: true
                }, {
                    name: 'In Ergebnisliste enthalten',
                    type: 'spline',
                    data: [],
                }]
            }
        }
    },
    computed: {
        isPDF() {
            return { 'offset_01_l': store.state.countsuchagent.isPDFVersion }
        },
        chart() {
            const chart = this.chartOptions
            const csa = store.state.countsuchagent
            chart.xAxis.categories = this.mounted ? csa.XAxisDates : []
            chart.yAxis[1].title = this.mounted && csa.isPerObjekt ? "" : 'Mein aktiver Objektbestand'
            chart.series[0].data = this.mounted ? csa.NumOfActiveObjectsOnDate : []
            chart.series[1].data = this.mounted ? csa.NumOfContactsPerAgent : [],
            chart.visible = this.mounted && csa.isPerObjekt ? false : true
            chart.showInLegend = this.mounted && csa.isPerObjekt ? false : true
            return chart 
        }
    },
    mounted() {
        this.mounted = true
    }
});
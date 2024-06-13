import Vue from 'vue'
import store from '../../store/store'

export default Vue.component('countinsearch_component', {
template: `
    <div>
        <div class="grid_12o12" v-bind:class="isPDF">
            <h3>In Ergebnisliste enthalten</h3>
        </div>

        <div class="grid_09o12_l grid_09o12_m grid_12o12_s" v-bind:class="isPDF">
            <highcharts id="ergebnisEnthalten" :options="chart" :updateArgs="[true, false]" style="width:100%;" ref="highcharts"></highcharts>
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
            return { 'offset_01_l': store.state.countinsearch.isPDFVersion }
        },
        chart() {
            const chart = this.chartOptions
            const cs = store.state.countinsearch
            chart.xAxis.categories = this.mounted ? cs.XAxisDates : []
            chart.yAxis[1].title = this.mounted && cs.isPerObjekt ? "" : 'Mein aktiver Objektbestand'
            chart.series[0].data = this.mounted ? cs.NumOfActiveObjectsOnDate : [] 
            chart.series[1].data = this.mounted ? cs.CountInSearchOnDate : [],
            chart.visible = this.mounted && cs.isPerObjekt ? false : true
            chart.showInLegend = this.mounted && cs.isPerObjekt ? false : true
            return chart 
        }
    },
    mounted() {
        this.mounted = true
    }
});
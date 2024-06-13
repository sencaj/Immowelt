import Vue from 'vue'
import store from '../../store/store'

export default Vue.component('exposevisit_component', {
template: `
    <div>
        <div class="grid_12o12" v-bind:class="isPDF">
            <h3>Exposéaufrufe</h3>
        </div>

        <div class="grid_09o12_l grid_09o12_m grid_12o12_s" v-bind:class="isPDF">
            <highcharts id="exposeaufrufe" :options="chart" :updateArgs="[true, false]" style="width:100%;" ref="contactvisit"></highcharts>
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
                    allowDecimals: false,
                    min: 0,
                },{ title: { text: '' },
                opposite: true,
                allowDecimals: false,
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
            const ev = store.state.exposevisit
            chart.xAxis.categories = this.mounted ? ev.XAxisDates : []
            chart.yAxis[1].title = this.mounted && ev.isPerObjekt ? "" : 'Mein aktiver Objektbestand'

            chart.series[0].data = this.mounted ? ev.NumOfActiveObjectsOnDate : [] 
            chart.series[0].visible = this.mounted && ev.isPerObjekt ? false : true
            chart.series[0].showInLegend = this.mounted && ev.isPerObjekt ? false : true

            chart.series[1].data = this.mounted ? ev.CountExposeVisit : []
            return chart 
        }
    },
    mounted() {
        this.mounted = true
    }
});
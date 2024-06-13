import Vue from 'vue'
import store from '../../store/store'

export default Vue.component('countinlist_component', {
template: `
    <div>
        <div class="grid_12o12" v-bind:class="isPDF">
            <h3 style="break-before:always;"> In Ergebnisliste gesehen </h3>
        </div>
        
        <div class="grid_09o12_l grid_09o12_m grid_12o12_s" v-bind:class="isPDF">
            <highcharts id="ergebnisGesehen" :options="chart" :updateArgs="[true, false]" style="width:100%;" ref="contactvisit"></highcharts>
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
                    },
                    {
                        name: 'Kontakte per E-Mail',
                        type: 'spline',
                        data: []
                    },
                    {
                        name: 'Kontakte per Telefon',
                        type: 'spline',
                        data: [],
                        dashStyle: 'ShortDot',
                    }
                ]
            }
        }
    },
    computed: {
        printPadding() {
            return { 'grid_09o12_l grid_09o12_m grid_12o12_s offset_01_l ergebnisListePadding': store.state.countinlist.isPDFVersion }
        },
        isPDF() {
            return { 'offset_01_l': store.state.countinlist.isPDFVersion }
        },
        chart() {
            const chart = this.chartOptions
            const cil = store.state.countinlist
            chart.xAxis.categories = this.mounted ? cil.XAxisDates : []
            chart.yAxis[1].title = this.mounted && cil.isPerObjekt ? "" : 'Mein aktiver Objektbestand'

            chart.series[0].data = this.mounted ? cil.CountInListOnDate : [] 
            chart.series[0].visible = this.mounted && cil.isPerObjekt ? false : true
            chart.series[0].showInLegend = this.mounted && cil.isPerObjekt ? false : true
            
            chart.series[1].data = this.mounted ? cil.NumOfActiveObjectsOnDate : []
            return chart 
        }
    },
    mounted() {
        this.mounted = true
    }
});